import Doctor from "../../models/doctors/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/users/index.js";

//doctor signup creating a user with doctor role
export const  signup  = async (req,res) => {
 const {fullName,email,password,specialty} = req.body;
  try{

    //hash the passwxord
    const hashedPassword = await bcrypt.hash(password,10);

    //create a newUser entry for the doctor

    const newUser = new User({
      fullName,
      email,
      password:hashedPassword,
      role:"Doctor"
    });


    //save the user to the database

    await newUser.save();


    //create a new doctor entry and link to user

    const newDoctor = new Doctor({

      user_id:newUser._id,
      specialty,
    });

    await newDoctor.save();

    res.status(201).json({message:"Doctor created successfully"});


  }

  catch(err){
    res.status(500).json({message:err.message});
  }



};


//doctor login

export const login = async(req,res)=> {
  const {email,password}= req.body;

  try{

    //check if the user exists
    const user = await User.findOne({email});
    if(!user || user.role !== "Doctor") return res.status(404).json({message:"Doctor not found"});
    //check if the password matches
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch) return res.status(401).json({message:"Invalid credentials"});

    //generate a token
    const token = jwt.sign(
      {id:user._id,role:user.role},
      process.env.JWT_SECRET,
      {expiresIn:"3d"}
    );
 

    const doctor = await Doctor.findOne({user_id:user._id}).populate("user_id");
  


  if (!doctor) return res.status(404).json({ message: "Doctor profile not found" });

    res.json({ token, doctor });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create Doctor (for Admins)
export const createDoctor = async (req, res) => {
  const { fullName, email, password, specialization,experienceYears ,qualification,hospitals_id} = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      role: "Doctor",
    });

    await newUser.save(); //save in database

    const newDoctor = new Doctor({
      user_id: newUser._id,
      specialization,
      experienceYears,
      qualification,

    });

    

    await newDoctor.save();

    res.status(201).json({ doctor: newDoctor });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Doctors
export const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().populate("user_id"); //populate means to get the user details as well means sabai auxa
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Doctor by ID
export const getDoctorById = async (req, res) => {
  const { id } = req.params;

  try {
    const doctor = await Doctor.findById(id).populate("user_id");
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });

    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Doctor (PUT - full update)
export const updateDoctor = async (req, res) => {
  const { id } = req.params; //routes ma pass gareko dynamic id eha auxa
  const { fullName, email, password, specialty } = req.body;

  try {
    let doctor = await Doctor.findById(id).populate("user_id");
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });

    let hashedPassword = doctor.user_id.password;
    if (password) hashedPassword = await bcrypt.hash(password, 12);

    // Update both user and doctor details
    await User.findByIdAndUpdate(doctor.user_id._id, { fullName, email, password: hashedPassword });
    doctor = await Doctor.findByIdAndUpdate(id, { specialty }, { new: true }).populate("user_id");

    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Patch Doctor (PATCH - partial update)
export const patchDoctor = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    if (updates.password) updates.password = await bcrypt.hash(updates.password, 12);

    const doctor = await Doctor.findById(id).populate("user_id");
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });

    await User.findByIdAndUpdate(doctor.user_id._id, updates);
    const updatedDoctor = await Doctor.findById(id).populate("user_id");

    res.status(200).json(updatedDoctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Delete Doctor
export const deleteDoctor = async (req, res) => {
  const { id } = req.params;

  try {
    const doctor = await Doctor.findById(id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });

    await User.findByIdAndDelete(doctor.user_id);
    await Doctor.findByIdAndDelete(id);

    res.status(200).json({ message: "Doctor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
import React , {useState,useEffect} from "react";

export default function HospitalSignupForm({onSubmit}) {
  const [formData, setFormData] = useState({
    hospitalName: "",
    hospitalAddress: "",
    hospitalContact: "",
    hospitalEmail: "",
    hospitalPassword: "",
    doctors: [],
    profile: "",
  });

  const [doctors, setDoctors] = useState([
    { doctorsName: "Doctor1", _id: 1 },
    { doctorsName: "Doctor2", _id: 2 },
  ]);

  const [hospitalProfilePreview, setHospitalProfilePreview] = useState(null);
  const [selectedDoctors, setSelectedDoctors] = useState([]);

  const handleHospitalProfileImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      profile: file,
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDoctorSelection = (id) => {
    setSelectedDoctors((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((doctorId) => doctorId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSubmit = (data) => {
  onSubmit(data);
  console.log(data);
  }

  useEffect(() => {
    setFormData({
      ...formData,
      doctors: selectedDoctors,
    });
  }, [selectedDoctors]);

  return (
    <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

      {/* {error && <p className="text-red-500 text-center mb-4">{error}</p>} */}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="hospitalEmail"
            value={formData.hospitalEmail}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Contact</label>
          <input
            type="contact"
            name="hospitalContact"
            value={formData.hospitalContact}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Address</label>
          <input
            type="contact"
            name="hospitalAddress"
            value={formData.hospitalAddress}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="hospitalPassword"
            value={formData.hospitalPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Picture</label>
          <input
            type="file"
            name="profile"
            // value={formData.profile}
            onChange={handleHospitalProfileImageChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
{/* 
        {/* <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300"
          disabled={isSubmitting}
        > */}
          {/* {isSubmitting ? "Logging in..." : "Login"} */}
        {/* </button> */} 

        {/* Doctor Selection */}
        <div className="w-full border border-gray-300 rounded mt-2 p-3">
          <p className="font-semibold text-gray-700 mb-2">Select Doctors</p>
          <div className="flex flex-col gap-2 max-h-40 overflow-y-auto">
            {doctors.map((doctor) => (
              <label
                key={doctor._id}
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => handleDoctorSelection(doctor._id)}
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  checked={selectedDoctors.includes(doctor._id)}
                  onChange={() => handleDoctorSelection(doctor._id)}
                />
                <span className="text-gray-600">{doctor.doctorsName}</span>
              </label>
            ))}


          </div>

        </div>
           <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300"
        >Submit
          {/* {isSubmitting ? "Logging in..." : "Login"} */}
        </button> 
      </form>
    </div>
  );
}

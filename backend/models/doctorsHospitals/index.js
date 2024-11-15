import mongoose from "mongoose";

const doctorsHospitalsSchema = new mongoose.Schema(
  {
   doctor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor", //reference to the Doctor model to link the doctor to the hospital
    required:true,
   },

   user_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
   }


  }
)
import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceYears: {
      type: Number,
      required: true,
    },
    clinicAddress: {
      type: String,
    },
    profile: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Doctor", doctorSchema);
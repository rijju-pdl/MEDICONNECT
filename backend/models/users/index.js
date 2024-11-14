import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
  fullName: {
    type:String,
    required: true,
  },

  email: {
    type:String,
    required: true,

  },

  password: {
    type:String,
    required: true, 
  }
  ,
  role:{
    type:String,
    default: 'user',
    enum: ["User", "Admin", "Doctor","Hospital"],
  },

},
{timestamps:true}
);

export default mongoose.model('User', userSchema);
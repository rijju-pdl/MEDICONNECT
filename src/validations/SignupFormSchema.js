import * as yup from "yup";

export const SignupFormSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: 
     yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
});

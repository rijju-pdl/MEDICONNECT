        /* eslint-disable react/prop-types */
        // src/components/auth/SignupForm.jsx
        import { useState } from "react";
        import { useForm } from "react-hook-form";
        import { yupResolver } from "@hookform/resolvers/yup";
        import { SignupFormSchema } from "../../validations/SignupFormSchema";

        const SignupForm = ({ onSubmit ,defaultValues}) => {
        // const [formData, setFormData] = useState({
        // fullName: "",
        // email: "",
        // password: "",
        // });

        // const handleChange = (e) => {
        // const { name, value } = e.target;
        // setFormData({
        // ...formData,
        // [name]: value,
        // });
        // };

        // const handleSubmit = (e) => {
        // e.preventDefault();
        // // Pass form data to the parent component or API call
        // onSubmit(formData);
        // };
      //   const SignupFormSchema= yup.object().shape({
      //     fullName: yup.string().required("Full Name is required"),
      //     email: yup.string().email("Invalid email format").required("Email is required"),
      //     password: defaultValues
      //       ? yup.string() // Password is optional for updates
      //       : yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
      //   });
      // const SignupFormSchema = yup.object().shape({
      //     fullName: yup.string().required("Full Name is required"),
      //     email: yup.string().email("Invalid email format").required("Email is required"),
      //     password: 
      //       yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
      //   });
      // Initialize React Hook Form
        const {
          register,
          handleSubmit,
          setValue,
          reset,
          formState: { errors },
        } = useForm({
          resolver: yupResolver(SignupFormSchema),
          defaultValues: {
            fullName: "",
            email: "",
            password: "",
          },
        });
      

        return (
          <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          {defaultValues ? "Update Account" : "Create Account"}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              {...register("fullName")}
              className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              {...register("email")}
              className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {!defaultValues && (
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                {...register("password")}
                className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {defaultValues ? "Update" : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
       
        );
        };

        export default SignupForm;


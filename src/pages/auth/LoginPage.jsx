        // src/pages/auth/LoginPage.jsx
        import { useNavigate } from "react-router-dom";
        import LoginForm from "../../components/auth/LoginForm";
import { updateUser } from "../../stores/authSlice";
import { useDispatch } from "react-redux";
       // import { apiRequest } from "../../utils/auth/apiRequest";

        const LoginPage = () => {
        const navigate = useNavigate(); 
        const dispatch = useDispatch();

        const handleLogin = async (formData) => {
        try {
        // Make API request to login
        // const { token, user } = await apiRequest({
        //         method: "POST",
        //         url: "/users/login", // Backend login endpoint
        //         data: formData,
        // });

        // const userData = { token, user };
        // // Store the token in localStorage under the key 'doctor_portal_user'
        // localStorage.setItem("doctor_portal_user", JSON.stringify(userData));

        const expiryTime = new Date().getTime() + 3*24*60*60*1000;
        localStorage.setItem("doctor_portal_user", JSON.stringify(formData));
        localStorage.setItem("expiry_date", JSON.stringify(expiryTime));
        
        //localStorage.getItem("doctor_portal_user");
        dispatch(updateUser(formData));
        // Redirect to the desired page (e.g., home page)
        navigate("/");
        } catch (error) {
        throw new Error(error.message || "Login failed");
        }
        };

        return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <LoginForm onSubmit={handleLogin} />
        </div>
        );
        };

        export default LoginPage;

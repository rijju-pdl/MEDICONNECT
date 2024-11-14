import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/global/Button";
import Navbar from "./components/global/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./components/global/HeroSection";

import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import ContactUs from "./pages/ContactUs";
import Hospital from "./pages/Hospital";
import AdminDashBoard from "./pages/admin/AdminDashBoard";
import AdminDoctors from "./pages/admin/AdminDoctors";
import AdminHospitals from "./pages/admin/AdminHospitals";
import GlobalContextProvider from "./context/GlobalContextProvider";
import SignupPage from "./pages/auth/SignupPage";
import DoctorCard2 from "./components/doctors/DoctorCard2";
import Doctor2 from "./pages/Doctor2";
import SingleDoctor from "./pages/SingleDoctor";
import DoctorSignupForm2 from "./components/auth/DoctorSignupForm";
import DoctorSignupPage from "./pages/auth/DoctorSignupPage";
import LoginPage from "./pages/auth/LoginPage";
import LoadUserDetails from "./components/global/LoadUserDetails";
import HospitalSignupPage from "./pages/auth/HospitalSignupPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <GlobalContextProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctor" element={
            
              <Doctor />
              } />
            <Route path="/Contact" element={<ContactUs />} />
            <Route path="/Hospital" element={<Hospital />} />
            <Route path ="/Signup" element = {<SignupPage/>}/>
            <Route path="/doctors2" element={<Doctor2 />} />
            <Route path="/doctors/:id" element={<SingleDoctor />} />
            <Route path ="/doctorssignup" element = {<DoctorSignupPage/>} />
            <Route path = "/user/login" element = {<LoginPage/>} />
            <Route path = "/hospitalsignup" element = {<HospitalSignupPage/>} />




            <Route path="admin">
              <Route index element={<AdminDashBoard />} />
              <Route path="doctors" element={<AdminDoctors />} />
              <Route path="hospitals" element={<AdminHospitals />} />
            </Route>
          </Routes>

          <LoadUserDetails/>
        </GlobalContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

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

            <Route path="admin">
              <Route index element={<AdminDashBoard />} />
              <Route path="doctors" element={<AdminDoctors />} />
              <Route path="hospitals" element={<AdminHospitals />} />
            </Route>
          </Routes>
        </GlobalContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

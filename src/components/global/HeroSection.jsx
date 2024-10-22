import React from 'react'
import heroimage from '/images/HeroSection.jpg'
import Button from './Button'
import { FaHospitalUser, } from "react-icons/fa";
import { GiHospitalCross } from "react-icons/gi";
import { TbUserSearch } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className = "h-screen bg-cover bg-center flex items-center justify-start text-white"
      style={{ backgroundImage: `url(${heroimage})` }} >

        <div className = "text-left p-2 ml-10 " >
          <h1 className = "text-6xl font-bold left mb-10 "> Your Health Is Our Priority </h1>
          <p className = " text-white font-bold py-2 px-4 "> Your Partner in Health and Wellness! </p>
          <Button  className="mt-4" onClickFn={() => console.log("Button clicked")} > Get Started </Button>

{/*Grid */}
          <div className = "w-full grid  grid-cols-4  h-full ">
            <div className = "flex items-center gap-2 bg-white bg-opacity-50 p-2 ">
              <FaHospitalUser className = "text-3xl text-primary" />
              <p className = "text-lg font-semibold text-primary"> Find Doctors </p>
            </div>
            <div className= "flex items-center gap-2 bg-white bg-opacity-50 p-2 ">
              <GiHospitalCross className = "text-3xl text-primary" />
              <p className = "text-lg font-semibold text-primary"> Find Hospitals </p>
            </div>
            <div className = "flex items-center gap-2 bg-white bg-opacity-50 p-2 ">
              <TbUserSearch className = "text-3xl text-primary" />
              <p className = "text-lg font-semibold text-primary"> Find Labs </p>
            </div>
            <div className = "flex items-center gap-2 bg-white bg-opacity-50 p-2 ">
              <FaUserDoctor className = "text-3xl text-primary" />
              <p className = "text-lg font-semibold text-primary"> Find Pharmacies </p>
            </div>


          </div>

        </div>

    </section>
  )
}

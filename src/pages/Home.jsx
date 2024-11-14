import React from 'react'
import HeroSection from '../components/global/HeroSection'
import { useGlobalContext } from '../context/GlobalContextProvider'
import DoctorCarousel from '../components/home/DoctorCarousel';


export default function Home() {
  const {user,login,logout} = useGlobalContext();
  console.log(user);
  return (
    <div>
      <HeroSection />
      <DoctorCarousel />
    </div>
  )
}

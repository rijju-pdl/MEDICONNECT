import { React, useState } from "react";
import { useDispatch } from "react-redux";

import DoctorCard2 from "../components/doctors/DoctorCard2";
import AddDoctorModal from "../components/doctors/AddDoctorDialog";
import AddDoctorDialog from "../components/doctors/AddDoctorDialog";
import { useSelector } from "react-redux";
import {updateDoctors} from "../stores/doctors2slice";
const doctors_data = [
  {
    id: 1,
    name: "Dr. John Smith",
    image: "/images/doctor1.jpeg",
    speciality: "Cardiology",
    experience: "10 years",
    location: "Biratnagar",
    contact: {
      phone: "+1 123 456 7890",
      email: "johnsmith@example.com",
    },
    rating: 4.8,
    reviews: 120,
    consultationFee: "$150",
    hospital: "Bir Hospital",
  },
  {
    id: 2,
    name: "Dr. Emily Clark",
    image: "/images/doctor2.jpeg",
    speciality: "Dermatology",
    experience: "8 years",
    location: "Kathmandu",
    contact: {
      phone: "+1 987 654 3210",
      email: "emilyclark@example.com",
    },
    rating: 4.7,
    reviews: 95,
    consultationFee: "$200",
    hospital: "Tribhuvan University Teaching Hospital",
  },
  {
    id: 3,
    name: "Dr. Michael Johnson",
    image: "/images/doctor3.jpeg",
    speciality: "Neurology",
    experience: "12 years",
    location: "Lalitpur",
    contact: {
      phone: "+1 555 123 4567",
      email: "michaeljohnson@example.com",
    },
    rating: 4.9,
    reviews: 140,
    consultationFee: "$180",
    hospital: "Nepal Mediciti Hospital",
  },
  {
    id: 4,
    name: "Dr. Sarah Lee",
    image: "/images/doctor3.jpeg",
    speciality: "Pediatrics",
    experience: "6 years",
    location: "Butwal",
    contact: {
      phone: "+1 222 333 4444",
      email: "sarahlee@example.com",
    },
    rating: 4.6,
    reviews: 110,
    consultationFee: "$130",
    hospital: "Grande International Hospital",
  },
  {
    id: 5,
    name: "Dr. David Martinez",
    image: "/images/doctor1.jpeg",
    speciality: "Orthopedics",
    experience: "15 years",
    location: "Hetauda",
    contact: {
      phone: "+1 111 222 3333",
      email: "davidmartinez@example.com",
    },
    rating: 4.9,
    reviews: 160,
    consultationFee: "$250",
    hospital: "Norvic International Hospital",
  },
];

export default function Doctor2() {
  const { doctors } = useSelector((store) => store.doctors2);
  const dispatch = useDispatch();

  //const [doctors ,setDoctors] = useState(doctors_data);
  const handleAddDoctor = (newDoctor) => {
    //example newDoctor = {name:"value name" , img_url:"value img_url"}
    const duplicateNewDoctor = { ...newDoctor, id: doctors.length + 1 };
    dispatch(updateDoctors([...doctors, duplicateNewDoctor]));
  };

  

  const handleUpdateDoctor = (updatedDoctor) => {
    const newDoctors = doctors.map((doctor) =>
      doctor.id === updatedDoctor.id ? updatedDoctor : doctor
    );
    dispatch(updateDoctors(newDoctors));

    // prevDoctors.find((doctor) => {
    //   doctor.id === updatedDoctor.id ? updatedDoctor : doctor;
  };

  const handleDeleteDoctor = (doctorId) => {
    const filteredDoctors = doctors.filter((doctor) => doctor.id !== doctorId);

    dispatch(updateDoctors(filteredDoctors));
  };

  return (
    <div>
      <AddDoctorDialog handleAddDoctor={handleAddDoctor} />
      <div className="flex flex-wrap gap-4 lg:gap-5">
        {doctors.map((doctor) => (
          <DoctorCard2
            doctor={doctor}
            key={doctor.id}
            className="w-full sm:w-[calc(50%_-_8px)] lg:w-[calc((100%_/_3)_-_(40px_/_3))] xl:w-[calc(25%_-_20px)]"
            handleUpdateDoctor={handleUpdateDoctor}
            handleDeleteDoctor={handleDeleteDoctor}
          />
        ))}
      </div>
    </div>
  );
}

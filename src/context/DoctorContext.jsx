/*import React, { createContext, useContext, useState } from "react";

//Creating the context for doctors

const DoctorContext = createContext();

//initial doctor list
const initialDoctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    speciality: "General Physician",
    contact: "1234567890",
  },
  {
    id: 2,
    name: "Dr. Jane Doe",
    speciality: "Cardiologist",
    contact: "1234567890",
  },
  {
    id: 3,
    name: "Dr. James Doe",
    speciality: "Dermatologist",
    contact: "1234567890",
  },
];

//Creating the provider for the context
export default function DoctorContextProvider({ children }) {
  const [doctors, setDoctors] = useState(initialDoctors);

  return (
    <DoctorContext.Provider value={{ doctors }}>
      {children}
    </DoctorContext.Provider>
  );
}

//custom hook to use doctorcontect in other components
export const useDoctorContext = ()=>{
  return useContext(DoctorContext);
}

*/
import React from 'react'
import { useParams } from 'react-router-dom'
import { doctors_data } from '../utils/data'

export default function SingleDoctor() {
  const {id} = useParams()

  const doctorId = parseInt(id, 10);

  const doctor = doctors_data.find((doc) => doc.id === doctorId );
  if(!doctor){
    return <h1>Doctor not found</h1>
  }

  return (
    <div className="doctor-details">
      <h2>{doctor.name}</h2>
      <img src={doctor.image} alt={doctor.name} className="w-48 h-48 object-cover" />
      <p><strong>Speciality:</strong> {doctor.speciality}</p>
      <p><strong>Experience:</strong> {doctor.experience}</p>
      <p><strong>Location:</strong> {doctor.location}</p>
      <p><strong>Contact:</strong> {doctor.contact.phone}</p>
      <p><strong>Email:</strong> {doctor.contact.email}</p>
      <p><strong>Rating:</strong> {doctor.rating}</p>
      <p><strong>Reviews:</strong> {doctor.reviews}</p>
      <p><strong>Consultation Fee:</strong> {doctor.consultationFee}</p>
    </div>
  );
}
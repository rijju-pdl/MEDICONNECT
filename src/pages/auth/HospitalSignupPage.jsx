import React from 'react'
import HospitalSignupForm from './HospitalSignupForm'

export default function HospitalSignupPage() {

  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div>
      <HospitalSignupForm onSubmit = {onSubmit} />
    </div>
  )
}

import React from 'react'
import SignupForm from '../../components/auth/SignupForm'

export default function SignupPage() {

  const handleSignup = async (formData) => {
    console.log(formData);
  }
  return (
    <div>
      <SignupForm onSubmit = {handleSignup}/>
    </div>
  )

}



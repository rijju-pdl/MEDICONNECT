import React from "react";
import DoctorSignupForm2 from "../../components/auth/DoctorSignupForm";

export default function DoctorSignupPage() {
  const onSubmit = async (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <DoctorSignupForm2 onSubmit={onSubmit} />
    </div>
  );
}

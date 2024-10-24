/*import React from "react";
import { useDoctorContext } from "../context/DoctorContext";
export default function Doctor() {
  const { doctors } = useDoctorContext();
  return (
    <div>
      <h1>List of Doctors Avaialable</h1>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>
            {doctor.name} - {doctor.speciality} - {doctor.contact}
          </li>
        ))}
      </ul>
    </div>
  );
}

*/

import React from 'react'
import DoctorFilter from '../components/doctors/DoctorFilter'
import FilteredDoctorsList from '../components/doctors/FilteredDoctorsList'


export default function Doctor() {
  return (
    <div className="flex flex-col gap-4 md:gap-6 section_vp padding">
    <DoctorFilter
      //currentlyViewedDoctorsLastIndex={currentlyViewedPageLastIndex}
     // currentlyViewedDoctorsStartIndex={currentlyViewedPageStartIndex}
    />

    <FilteredDoctorsList
      // totalDoctors={totalDoctors}
      // totalPage={totalPage}
      // page={currentlyViewedPageNum}
      // numOfDoctorsPerPage={numOfDoctorsPerPage}
      // onPageChange={changeCurrentlyViewedPageNum}
      // currentlyViewedDoctorsLastIndex={currentlyViewedPageLastIndex}
      // currentlyViewedDoctorsStartIndex={currentlyViewedPageStartIndex}
  
    />
  </div>
  )
}

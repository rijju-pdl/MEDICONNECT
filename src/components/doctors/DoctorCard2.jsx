/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import DeleteButton from "./deleteButton";
import axios from "axios";
import UpdateDoctorDialog from "./UpdateDoctorDialog";

const DoctorCard2 = ({ doctor , handleUpdateDoctor ,handleDeleteDoctor }) => {
  console.log(doctor);
   const handleDelete = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.delete(
  //       `http://localhost:5001/api/v1/products/${doctor._id}`
  //     );
  //     console.log(response.data); // Handle the response data as needed
  //   } catch (error) {
  //     console.error("There was an error posting the product!", error);
  //   }
  };
  return (
    <div className="doctor-card p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className=" overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </div>
      <div className="p-2">
        <h3 className="lg:text-lg font-bold">{doctor.name}</h3>
        {/* <p className="mt-2 font-bold text-blue-500 text-2xl">${doctor.price}</p>
        <p className="text-gray-600 mt-2 line-clamp-2">
          {doctor.shortDescription}
        </p> */}

        <div className=" flex items-center justify-between">
          <Link
            to={`/doctors/${doctor.id}`}
            className="text-blue-500 mt-4 block border border-blue-500 w-fit p-2 rounded-md px-4 hover:bg-blue-500 hover:text-white duration-200 transition-all"
          >
            View Details
          </Link>

          <div className=" flex items-center gap-2">
            <UpdateDoctorDialog doctor={doctor} handleUpdateDoctor={handleUpdateDoctor} />
            <DeleteButton onClick={()=> {handleDeleteDoctor(doctor.id)}} handleDeleteDoctor={handleDeleteDoctor} doctorId = {doctor.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard2

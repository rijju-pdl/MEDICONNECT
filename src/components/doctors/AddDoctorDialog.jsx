import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { RxCross2 } from "react-icons/rx";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import axios from "axios"; // If you prefer axios

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddDoctorDialog = ({handleAddDoctor}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [Doctor, setDoctor] = useState({
    name: "",
    
    image: "",
    // shortDescription: "",
    // fullDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // name = "name" ,value = "name something"

    setDoctor({
      ...Doctor, 
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    console.log(Doctor);
    e.preventDefault();
 handleAddDoctor(Doctor);
      setIsOpenModal(false);
      setDoctor({
        name: "",
       
        image: "",
        // shortDescription: "",
        // fullDescription: "",
      });
    
    }
  

  return (
    <div>
      <Button className="" onClick={() => setIsOpenModal(true)}>
        Add NewdDoctor
      </Button>
      <Dialog
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        TransitionComponent={Transition}
        maxWidth="sm"
        fullWidth
      >
        <div
          className="absolute top-3 right-[2rem] text-2xl cursor-pointer"
          onClick={() => setIsOpenModal(false)}
        >
          <RxCross2 />
        </div>
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <h3 className="text-xl font-medium mb-2">Add NewdDoctor</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={Doctor.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            {/* <div className="mb-4">
              <input
                type="number"
                name="price"
                placeholder="Price*"
                value={Doctor.price}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div> */}
            <div className="mb-4">
              <input
                type="text"
                name="image"
                placeholder="Image URL*"
                value={Doctor.image}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            {/* <div className="mb-4">
              <textarea
                name="shortDescription"
                placeholder="Short Description*"
                value={Doctor.shortDescription}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div> */}
            {/* <div className="mb-4">
              <textarea
                name="fullDescription"
                placeholder="Full Description*"
                value={Doctor.fullDescription}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div> */}
            <div className="flex justify-end">
              <Button type="submit" variant="contained" color="primary">
                AdddDoctor
              </Button>
              <Button
                onClick={() => setIsOpenModal(false)}
                variant="outlined"
                color="secondary"
                className="ml-2"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default AddDoctorDialog;

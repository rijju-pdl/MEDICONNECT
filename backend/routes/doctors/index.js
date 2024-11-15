import express from "express";
import { authMiddleware } from "../../middlewares/auth/index.js";
const router = express.Router();
import { createDoctor, getDoctors, getDoctorById, updateDoctor, patchDoctor, deleteDoctor, signup, login } 
from "../../controllers/doctors/index.js";

//creating a new doctor by  checking if the user is authenticated and has the role "Admin"
// router.post("/create", authMiddleware(["Admin"]),createDoctor);
router.post("/create",createDoctor);

//get all doctors
router.get("/",authMiddleware(["Admin"]),getDoctors);
// router.get("/get",getDoctors);


//check doctor role

router.get("/check",authMiddleware(["Doctor","Admin","Hospital","User"]),(req,res)=>{
    console.log("req.user",req.user);
    return res.json({role:req.user.role});
});

//get doctor by id

router.get("/:id",authMiddleware(["Admin","Doctor","User","Hospital"]),getDoctorById);

//update doctor

router.put("/:id",authMiddleware(["Admin","Doctor","User","Hospital"]),updateDoctor);

//patch doctor

router.patch("/:id",patchDoctor);

//delete doctor
router.delete("/:id",authMiddleware(["Admin","Doctor","User","Hospital"]),deleteDoctor);

//signup route

router.post("/signup",signup); //controller function
router.post("/login",login);


export default router;







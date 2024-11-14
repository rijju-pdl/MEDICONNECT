import express from "express";
import { authMiddleware } from "../../middlewares/auth";
const router = express.Router();


//creating a new doctor by  checking if the user is authenticated and has the role "Admin"
router.post("/", authMiddleware(["Admin"]),createUser);

//get all doctors
router.get("/",authMiddleware(["Admin"]),getUsers);

//check doctor role

router.get



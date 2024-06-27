import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/create-admin", userController.createAdmin);

export const userRoutes = router;

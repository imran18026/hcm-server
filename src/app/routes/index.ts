/* eslint-disable @typescript-eslint/no-explicit-any */
import express from "express";
import { userRoutes } from "../modules/user/user.routes";

//router
const router = express.Router();

// all routes
const moduleRoutes: any[] = [{ path: "/user", route: userRoutes }];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;

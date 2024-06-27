import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";

const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password, ...adminData } = req.body;
    const result = await userService.createAdmin(adminData, password);
    res.status(200).json({
      status: "success",
      message: "Admin created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const userController = { createAdmin };

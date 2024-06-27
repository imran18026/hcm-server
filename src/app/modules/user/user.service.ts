import { Admin, UserRole } from "@prisma/client";

import bcrypt from "bcrypt";
import prisma from "../shared/prisma";
const createAdmin = async (
  adminData: Admin,
  password: string
): Promise<Admin> => {
  console.log(password, adminData);
  const hashPassword = bcrypt.hashSync(password, 12);
  const userData = {
    role: UserRole.ADMIN,
    email: adminData.email,
    password: hashPassword,
    // password: password,
  };
  const result = await prisma.$transaction(async (transactionClient) => {
    await transactionClient.user.create({
      data: userData,
    });
    const createdAdminData = await transactionClient.admin.create({
      data: adminData,
    });

    return createdAdminData;
  });

  return result;
};

export const userService = { createAdmin };

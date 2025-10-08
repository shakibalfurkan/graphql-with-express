import type { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserInDB = async (userData: Partial<TUser>) => {
  const result = await User.create(userData);
  console.log(result);
  return result;
};

const getAllUsersFromDB = async () => {
  const result = await User.find({ isDeleted: false });
  return result;
};

const getUserFromDB = async (id: string) => {
  const result = await User.findById(id, { isDeleted: false });
  return result;
};

export const UserService = {
  createUserInDB,
  getAllUsersFromDB,
  getUserFromDB,
};

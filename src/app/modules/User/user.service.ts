import { User } from "./user.model";

const getAllUserFromDB = async () => {
  const result = await User.find({ isDeleted: false });
  return result;
};

const getUserFromDB = async (id: string) => {
  const result = await User.findById(id, { isDeleted: false });
  return result;
};

export const UserService = {
  getAllUserFromDB,
  getUserFromDB,
};

import { User } from "./user.model";

const getAllUserFromDB = async () => {
  const result = await User.find({ isDeleted: false });
  return result;
};

export const UserService = {
  getAllUserFromDB,
};

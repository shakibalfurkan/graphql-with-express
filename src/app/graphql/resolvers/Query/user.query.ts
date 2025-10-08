import { UserController } from "../../../modules/User/user.controller";

const userQueries = {
  users: UserController.getAllUsers,
  user: UserController.getUser,
};

export default userQueries;

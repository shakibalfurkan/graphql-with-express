import { UserController } from "../../../modules/User/user.controller";

const userQueries = {
  users: UserController.getAllUser,
  user: UserController.getUser,
};

export default userQueries;

import { UserController } from "../../../modules/User/user.controller";

const userMutations = {
  createUser: UserController.createUser,
};

export default userMutations;

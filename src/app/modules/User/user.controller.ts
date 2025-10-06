import { GraphQLError } from "graphql";
import { UserService } from "./user.service";

const getAllUser = async (parent: any, args: any, context: any) => {
  try {
    const result = await UserService.getAllUserFromDB();

    return {
      success: true,
      statusCode: 200,
      message: "Users fetched successfully",
      data: result,
    };
  } catch (error) {
    throw new GraphQLError("Internal Server Error", {
      extensions: {
        code: "INTERNAL_SERVER_ERROR",
        http: {
          status: 500, // Internal Server Error
        },
      },
    });
  }
};

export const UserController = {
  getAllUser,
};

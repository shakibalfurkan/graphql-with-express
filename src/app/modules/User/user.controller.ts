import { GraphQLError } from "graphql";
import { UserService } from "./user.service";
import type { TUser } from "./user.interface";

const createUser = async (_: any, args: { user: Partial<TUser> }) => {
  try {
    const { user } = args;
    const result = await UserService.createUserInDB(user);

    return {
      success: true,
      statusCode: 201,
      message: "User created successfully",
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

const getAllUsers = async () => {
  try {
    const result = await UserService.getAllUsersFromDB();

    return {
      success: true,
      statusCode: 200,
      message: "Users retrieved successfully",
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

const getUser = async (_: any, args: { id: string }) => {
  try {
    const { id } = args;
    const result = await UserService.getUserFromDB(id);

    return {
      success: true,
      statusCode: 200,
      message: "User retrieved successfully",
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
  createUser,
  getAllUsers,
  getUser,
};

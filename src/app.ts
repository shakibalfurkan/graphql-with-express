import { ApolloServer, type BaseContext } from "@apollo/server";
import { schema } from "./app/graphql/schema/schema.js";
import { UserController } from "./app/modules/User/user.controller.js";

export const server = new ApolloServer<BaseContext>({
  typeDefs: schema,
  resolvers: {
    Query: {
      users: UserController.getAllUser,
    },
  },
});

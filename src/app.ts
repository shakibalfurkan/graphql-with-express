import { ApolloServer, type BaseContext } from "@apollo/server";
import { schema } from "./app/graphql/schema/schema.js";

export const server = new ApolloServer<BaseContext>({
  typeDefs: schema,
  resolvers: {
    Query: {
      hello: () => "Hello World",
    },
  },
});

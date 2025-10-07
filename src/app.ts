import { ApolloServer, type BaseContext } from "@apollo/server";
import { schema } from "./app/graphql/schema/schema";
import resolvers from "./app/graphql/resolvers";

export const server = new ApolloServer<BaseContext>({
  typeDefs: schema,
  resolvers,
});

import { ApolloServer, type BaseContext } from "@apollo/server";
import graphQLResolvers from "./resolvers";
import { graphQLSchema } from "./schemas";
// import { startStandaloneServer } from "@apollo/server/dist/esm/standalone";

export const createGraphQLServer = () => {
  const server = new ApolloServer<BaseContext>({
    typeDefs: graphQLSchema,
    resolvers: graphQLResolvers,
  });

  return server;
};

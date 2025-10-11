import { ApolloServer, type BaseContext } from "@apollo/server";
import { graphQLSchema } from "./schema/schema";
import graphQLResolvers from "./resolvers";
// import { startStandaloneServer } from "@apollo/server/dist/esm/standalone";

export const connectGraphQL = () => {
  const server = new ApolloServer<BaseContext>({
    typeDefs: graphQLSchema,
    resolvers: graphQLResolvers,
  });

  // const { url } = await startStandaloneServer(server, {
  //   listen: { port: Number(port) },
  // });

  // console.log(`🚀  Server ready at: ${url}`);

  return server;
};

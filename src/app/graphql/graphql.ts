import { ApolloServer, type BaseContext } from "@apollo/server";
import graphQLResolvers from "./resolvers";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { commonSchema } from "./schemas/common.schema";
import { userSchema } from "./schemas/user.schema";
import { graphQLSchema } from "./schemas/schema";
import { bookingSchema } from "./schemas/booking.schema";
import { carSchema } from "./schemas/car.schema";
// import { startStandaloneServer } from "@apollo/server/dist/esm/standalone";

const typeDefs = mergeTypeDefs([
  commonSchema,
  graphQLSchema,
  userSchema,
  bookingSchema,
  carSchema,
]);

export const connectGraphQL = () => {
  const server = new ApolloServer<BaseContext>({
    typeDefs,
    resolvers: graphQLResolvers,
  });

  // const { url } = await startStandaloneServer(server, {
  //   listen: { port: Number(port) },
  // });

  // console.log(`🚀  Server ready at: ${url}`);

  return server;
};

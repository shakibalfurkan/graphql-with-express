import { mergeTypeDefs } from "@graphql-tools/merge";
import { commonSchema } from "./common.schema";
import { userSchema } from "./user.schema";
import { bookingSchema } from "./booking.schema";
import { carSchema } from "./car.schema";

const typeDefs = `#graphql
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

export const graphQLSchema = mergeTypeDefs([
  commonSchema,
  typeDefs,
  userSchema,
  bookingSchema,
  carSchema,
]);

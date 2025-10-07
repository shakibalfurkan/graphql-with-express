import Mutation from "./Mutation";
import Query from "./Query";
import Relation from "./Relation";

const resolvers = {
  // Query resolvers
  Query,
  // Relationship resolvers added here
  ...Relation,
  // Mutation resolvers
  Mutation,
};

export default resolvers;

import Mutation from "./Mutation";
import Query from "./Query";
import RelationResolvers from "./Relation";

const resolvers = {
  // Query resolvers
  Query,
  // Relationship resolvers added here
  ...RelationResolvers,
  // Mutation resolvers
  Mutation,
};

export default resolvers;

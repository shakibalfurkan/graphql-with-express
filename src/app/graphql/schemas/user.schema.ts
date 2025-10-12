export const userSchema = `#graphql
  extend type Query {
    users(options: QueryOptions): UsersResponse!
    user(id: ID!): UserResponse!
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    role: String!
    phone: String!
    createdAt: String!
    updatedAt: String!
    isDeleted: Boolean!
  }

  type UsersResponse {
    success: Boolean!
    statusCode: Int!
    message: String!
    data: [User!]!
    total: Int!
    metadata: Metadata!
  }

  type UserResponse {
    success: Boolean!
    statusCode: Int!
    message: String!
    data: User!
  }

  extend type Mutation {
    createUser(user: CreateUserInput!): UserResponse!
  }

  input CreateUserInput {
    name: String!
    email: String!
    role: String
    password: String!
    phone: String!
  }
`;

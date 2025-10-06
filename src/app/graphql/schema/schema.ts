export const schema = `#graphql
type Query {
    users: UsersResponse!
    # user(id:ID!): UserResponse!
}

type Mutation{
    createUser(user: CreateUserInput!): UserResponse!
}

type User {
   _id:ID!
   name:String!
    email:String!
    role:String!
    phone:String!
    createdAt:String!
    updatedAt:String!
    isDeleted:Boolean!
}

type UsersResponse {
    success: Boolean!
    statusCode: Int!
    message: String!
    data: [User!]!
}
type UserResponse {
    success: Boolean!
    statusCode: Int!
    message: String!
    data: User!
}

input CreateUserInput{
    name:String!
    email:String!
    role:String!
    password:String!
    phone:String!
}


`;

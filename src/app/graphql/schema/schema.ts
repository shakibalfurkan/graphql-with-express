export const schema = `#graphql
type Query {
    users: UsersResponse!
    user(id:ID!): UserResponse!
    bookings: BookingsResponse!
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

type Booking{
    _id:ID!
    date:String!
    user:User!
    car:String!
    GPS:Boolean!
    childSeat:Boolean!
    creditCard:String!
    drivingLicense:String!
    passport:String!
    startTime:String!
    endTime:String!
    totalCost:Float!
    createdAt:String!
    updatedAt:String!
    status:String!
    returned:Boolean!
    isPaid:Boolean!
}

type BookingsResponse {
    success: Boolean!
    statusCode: Int!
    message: String!
    data: [Booking!]!
}

type BookingResponse {
    success: Boolean!
    statusCode: Int!
    message: String!
    data: Booking!
}

# Mutations
type Mutation{
    createUser(user: CreateUserInput!): UserResponse!
}

input CreateUserInput{
    name:String!
    email:String!
    role:String!
    password:String!
    phone:String!
}



`;

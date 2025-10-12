export const carSchema = `#graphql

 extend type Query {
    cars(options: QueryOptions): CarsResponse!
    car(id: ID!): CarResponse!
  }

   type Car {
    _id: ID!
    name: String!
    model: String!
    year: String!
    image: String!
    location: String!
    ownerEmail: String!
    ownerName: String!
    description: String!
    color: String!
    isElectric: Boolean!
    status: String!
    features: [String!]!
    pricePerHour: Float!
    isDeleted: Boolean!
    createdAt: String!
    updatedAt: String!
    carType: String
    seatCapacity: Int!
    date: String!
  }

  type CarsResponse {
    success: Boolean!
    statusCode: Int!
    message: String!
    data: [Car!]!
    total: Int!
    metadata: Metadata!
  }

  type CarResponse {
    success: Boolean!
    statusCode: Int!
    message: String!
    data: Car!
  }

`;

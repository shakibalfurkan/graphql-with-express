export const bookingSchema = `#graphql
  extend type Query {
     bookings(options: QueryOptions): BookingsResponse!
    booking(id: ID!): BookingResponse!
  }
  
  type Booking {
    _id: ID!
    date: String!
    user: User
    car: Car
    GPS: Boolean!
    childSeat: Boolean!
    creditCard: String!
    drivingLicense: String!
    passport: String!
    startTime: String!
    endTime: String!
    totalCost: Float!
    createdAt: String!
    updatedAt: String!
    status: String!
    returned: Boolean!
    isPaid: Boolean!
  }

  type BookingsResponse {
    success: Boolean!
    statusCode: Int!
    message: String!
    data: [Booking]
  }

  type BookingResponse {
    success: Boolean!
    statusCode: Int!
    message: String!
    data: Booking
  }

  
  `;

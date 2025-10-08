export const schema = `#graphql
type Query {
    users(options: QueryOptions): UsersResponse!
    user(id:ID!): UserResponse!
    bookings(options: QueryOptions): BookingsResponse!
    booking(id:ID!): BookingResponse!
    cars(options: QueryOptions): CarsResponse!
    car(id:ID!): CarResponse!
}

input QueryOptions{
    filter: FilterInput
    sort: SortInput
    pagination: PaginationInput
}

input FilterInput{
    role:String
    status:String
}

input SortInput{
    field:String
    order:String
}

input PaginationInput {
  page: Int = 1
  limit: Int = 10
  offset: Int = 0
}

type Metadata {
  # Pagination Details
  total: Int!              # Total number of items across all pages
  page: Int!               # Current page number
  limit: Int!              # Number of items per page
  pages: Int!              # Total number of pages

  # Additional Useful Metadata
  hasNextPage: Boolean!    # Indicates if there are more pages
  hasPrevPage: Boolean!    # Indicates if there are previous pages
  
  # Performance and Filtering Insights
  itemCount: Int!          # Number of items in the current page
  filteredTotal: Int       # Total items after applying filters
  
  # Timestamp Metadata
  queriedAt: String!       # ISO timestamp of when the query was executed
  
  # Optional Sorting and Filtering Context
  sortedBy: String         # Field used for sorting
  sortOrder: String        # Sort direction (ASC/DESC)
  appliedFilters: [String] # List of applied filter keys
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
    total: Int!
    metadata: Metadata!
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
    user:User
    car:Car
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
    data: [Booking]!
}

type BookingResponse {
    success: Boolean!
    statusCode: Int!
    message: String!
    data: Booking
}



type Car { 
    _id:ID!
    name:String!
    model:String!
    year:String!
    image:String!
    location:String!
    ownerEmail:String!
    ownerName:String!
    description:String!
    color:String!
    isElectric:Boolean!
    status:String!
    features:[String!]!
    pricePerHour:Float!
    isDeleted:Boolean!
    createdAt:String!
    updatedAt:String!
    carType:String
    seatCapacity:Int!
    date:String!
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

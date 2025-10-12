export const commonSchema = `#graphql

  input QueryOptions {
    filter: FilterInput
    sort: SortInput
    pagination: PaginationInput
  }

  input FilterInput {
    role: String
    status: String
  }

  input SortInput {
    field: String
    order: String
  }

  input PaginationInput {
    page: Int = 1
    limit: Int = 10
    offset: Int = 0
  }

  type Metadata {
    total: Int!
    page: Int!
    limit: Int!
    pages: Int!
    hasNextPage: Boolean!
    hasPrevPage: Boolean!
    itemCount: Int!
    filteredTotal: Int
    queriedAt: String!
    sortedBy: String
    sortOrder: String
    appliedFilters: [String]
  }

`;

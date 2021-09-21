import { gql } from "apollo-boost";

export const ALL_PRODUCTS_QUERY = gql`
  query allProductsQuery {
    categories {
      products {
        id
        name
        inStock
        gallery
        category
        prices {
          currency
          amount
        }
        brand
        attributes {
          id
          name
          type
          items {
            value
            displayValue
          }
        }
      }
    }
  }
`;

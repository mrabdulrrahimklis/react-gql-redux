import { gql } from "apollo-boost";

export const CATEGORY_QUERY = gql`
  query categoryQuery($category: String!) {
    category(input: { title: $category }) {
      name
      products {
        id
        name
        inStock
        gallery
        category
        prices {
          amount
          currency
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

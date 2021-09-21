import { gql } from "apollo-boost";

export const SINGLE_PRODUCT_QUERY = gql`
  query singleProductQuery($product: String!) {
    product(id: $product) {
      id
      name
      inStock
      gallery
      brand
      description
      category
      attributes {
        id
        name
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency
        amount
      }
    }
  }
`;

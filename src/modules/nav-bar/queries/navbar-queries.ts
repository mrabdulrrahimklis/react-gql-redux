import gql from "graphql-tag";

export const CATEGORIES_QUERY = gql`
  query allCategories {
    categories {
      name
    }
  }
`;

export const CURRENCIES_QUERY = gql`
  query allCurrencies {
    currencies
  }
`;

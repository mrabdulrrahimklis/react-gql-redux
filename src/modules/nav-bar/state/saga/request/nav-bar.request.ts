import { client } from "../../../../../core/services/service";
import {
  CATEGORIES_QUERY,
  CURRENCIES_QUERY,
} from "../../../queries/navbar-queries";
export function getCategoriesName() {
  return client.query({
    query: CATEGORIES_QUERY,
    fetchPolicy: "no-cache",
  });
}

export function getCurrencies() {
  return client.query({
    query: CURRENCIES_QUERY,
    fetchPolicy: "no-cache",
  });
}

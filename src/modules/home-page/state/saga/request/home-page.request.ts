import { client } from "../../../../../core/services/service";
import { ALL_PRODUCTS_QUERY } from "../../../queries/all-products-queries";
export function getProducts() {
  return client.query({
    query: ALL_PRODUCTS_QUERY,
    fetchPolicy: "no-cache",
  });
}

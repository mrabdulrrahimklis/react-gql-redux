import { client } from "../../../../../core/services/service";
import { SINGLE_PRODUCT_QUERY } from "../../../queries/single-product-queries";
export function getSingleProduct(product: string) {
  return client.query({
    query: SINGLE_PRODUCT_QUERY,
    variables: {
      product,
    },
    fetchPolicy: "no-cache",
  });
}

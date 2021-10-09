import { client } from "../../../../../core/services/service";
import { CATEGORY_QUERY } from "../../../queries/category-queries";
export function getCategories(category: string) {
  return client.query({
    query: CATEGORY_QUERY,
    variables: {
      category,
    },
    fetchPolicy: "no-cache",
  });
}

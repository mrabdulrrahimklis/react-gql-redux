export interface ROUTE_TYPE {
  [key: string]: string;
}

export const ROUTES = {
  HOME: "/",
  CATEGORIES: "/categories/:categories",
  PRODUCT: "/categories/:categories/:product",
  CART: "/cart",
};

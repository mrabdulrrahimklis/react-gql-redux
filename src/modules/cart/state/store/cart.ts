export const GET_SELECTED_PRODUCTS = "getSelectedProducts";
export const SET_SELECTED_PRODUCTS = "setSelectedProducts";
export const ADD_PRODUCT_TO_CART = "addProductToCart";
export const PLUS_ONE_PRODUCT = "plusOneProduct";
export const MINUS_ONE_PRODUCT = "minusOneProduct";

export const getSelectedProductsAction = (payload: any) => ({
  type: GET_SELECTED_PRODUCTS,
  payload,
});

export const setSelectedProductsAction = (payload: any) => ({
  type: SET_SELECTED_PRODUCTS,
  payload,
});

export const addProductToCart = (payload: any) => ({
  type: ADD_PRODUCT_TO_CART,
  payload,
});

export const plusOneProduct = (payload: any) => ({
  type: PLUS_ONE_PRODUCT,
  payload,
});

export const minusOneProduct = (payload: any) => ({
  type: MINUS_ONE_PRODUCT,
  payload,
});

const initialState = {
  selectedProducts: [],
};

const selectedProductsDuck = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_SELECTED_PRODUCTS: {
      return {
        ...state,
      };
    }
    case SET_SELECTED_PRODUCTS: {
      return {
        ...state,
        selectedProducts: action.payload,
      };
    }
    case ADD_PRODUCT_TO_CART: {
      let { selectedProducts } = state;
      const item = state.selectedProducts.find(
        (product: any) =>
          JSON.stringify(product.itemType) ===
            JSON.stringify(action.payload.itemType) &&
          action.payload.id === product.id
      );

      if (item) {
        // @ts-ignore
        selectedProducts = state.selectedProducts.map((product: any) =>
          JSON.stringify(product.itemType) ===
            JSON.stringify(action.payload.itemType) &&
          action.payload.id === product.id
            ? {
                ...product,
                count: product.count + 1,
              }
            : product
        );
      } else {
        // @ts-ignore
        selectedProducts.push(action.payload);
      }

      return {
        ...state,
        selectedProducts,
      };
    }
    case PLUS_ONE_PRODUCT: {
      let { selectedProducts } = state;
      const item = selectedProducts.find(
        (product: any) =>
          JSON.stringify(product.itemType) ===
            JSON.stringify(action.payload.itemType) &&
          product.id === action.payload.id
      );

      if (item) {
        // @ts-ignore
        selectedProducts = selectedProducts.map((product: any) => {
          return JSON.stringify(product?.itemType) ===
            JSON.stringify(action.payload?.itemType) &&
            product.id === action.payload.id
            ? {
                ...product,
                count: product.count + 1,
              }
            : product;
        });
      } else {
        // @ts-ignore
        selectedProducts.push(action.payload);
      }

      return {
        ...state,
        selectedProducts,
      };
    }
    case MINUS_ONE_PRODUCT: {
      let { selectedProducts } = state;
      const item: any = state.selectedProducts.find(
        (product: any) =>
          JSON.stringify(product.itemType) ===
            JSON.stringify(action.payload.itemType) &&
          product.id === action.payload.id
      );
      const index = state.selectedProducts.indexOf(item as never);

      if (item) {
        if (item.count !== 1) {
          // @ts-ignore
          selectedProducts = state.selectedProducts.map((product: any) => {
            return JSON.stringify(product.itemType) ===
              JSON.stringify(action.payload.itemType) &&
              product.id === action.payload.id
              ? {
                  ...product,
                  count: product.count - 1,
                }
              : product;
          });
        } else {
          state.selectedProducts.splice(index, 1);
        }
      }

      return {
        ...state,
        selectedProducts,
      };
    }
    default:
      return state;
  }
};

export default selectedProductsDuck;

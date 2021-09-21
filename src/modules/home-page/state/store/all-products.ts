export const GET_PRODUCTS = "getProducts";
export const SET_PRODUCTS = "setProducts";
export const SET_PRODUCTS_ERROR = "setProductsError";

export const getProductsAction = (payload: any) => ({
  type: GET_PRODUCTS,
  payload,
});

export const setProductsAction = (payload: any) => ({
  type: SET_PRODUCTS,
  payload,
});

export const setProductsErrorAction = (payload: any) => ({
  type: SET_PRODUCTS_ERROR,
  payload,
});

const initialState = {
  products: [],
  error: {},
  loaded: null,
};

const productsDuck = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
        loaded: true,
      };
    }
    case SET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
        loaded: true,
      };
    }
    case SET_PRODUCTS_ERROR: {
      return {
        ...state,
        error: action.payload,
        loaded: false,
      };
    }
    default:
      return state;
  }
};

export default productsDuck;

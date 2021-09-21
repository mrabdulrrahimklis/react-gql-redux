export const GET_SINGLE_PRODUCT = "getSingleProduct";
export const SET_SINGLE_PRODUCT = "setSingleProduct";

export const getSingleProductAction = (payload: any) => ({
  type: GET_SINGLE_PRODUCT,
  payload,
});

export const setSingleProductAction = (payload: any) => ({
  type: SET_SINGLE_PRODUCT,
  payload,
});

const initialState = {
  product: [],
  loaded: null,
};

const singleProductDuck = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_SINGLE_PRODUCT: {
      return {
        ...state,
        product: action.payload,
        loaded: true,
      };
    }
    case SET_SINGLE_PRODUCT: {
      return {
        ...state,
        product: action.payload,
        loaded: true,
      };
    }
    default:
      return state;
  }
};

export default singleProductDuck;

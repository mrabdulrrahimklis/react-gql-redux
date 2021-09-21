export const GET_CATEGORIES_NAME = "getCategoriesName";
export const SET_CATEGORIES_NAME = "setCategoriesName";
export const GET_CURRENCIES = "getCurrencies";
export const SET_CURRENCIES = "setCurrencies";
export const SET_OPEN_CURRENCIES = "setOpenCurrencies";
export const SET_OPEN_CART = "setOpenCart";
export const SET_CURRENCY = "setCurrency";

export const getCategoriesNameAction = (payload: any) => ({
  type: GET_CATEGORIES_NAME,
  payload,
});

export const setCategoriesNameAction = (payload: any) => ({
  type: SET_CATEGORIES_NAME,
  payload,
});

export const getCurrenciesAction = (payload: any) => ({
  type: GET_CURRENCIES,
  payload,
});

export const setCurrenciesAction = (payload: any) => ({
  type: SET_CURRENCIES,
  payload,
});

export const setOpenCurrenciesAction = (payload: any) => ({
  type: SET_OPEN_CURRENCIES,
  payload,
});

export const setOpenCartAction = (payload: any) => ({
  type: SET_OPEN_CART,
  payload,
});

export const setCurrency = (payload: any) => ({
  type: SET_CURRENCY,
  payload,
});

const initialState = {
  categoriesName: [],
  currencies: [],
  loaded: null,
  open: false,
  showCart: false,
  currency: "USD",
};

const navbarDuck = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_CATEGORIES_NAME: {
      return {
        ...state,
        categoriesName: action.payload,
        loaded: true,
      };
    }
    case SET_CATEGORIES_NAME: {
      return {
        ...state,
        categoriesName: action.payload,
        loaded: true,
      };
    }
    case GET_CURRENCIES: {
      return {
        ...state,
        currencies: action.payload,
        loaded: true,
      };
    }
    case SET_CURRENCIES: {
      return {
        ...state,
        currencies: action.payload,
        loaded: true,
      };
    }
    case SET_OPEN_CURRENCIES: {
      return {
        ...state,
        open: action.payload,
      };
    }
    case SET_OPEN_CART: {
      return {
        ...state,
        showCart: action.payload,
      };
    }
    case SET_CURRENCY: {
      return {
        ...state,
        currency: action.payload,
      };
    }

    default:
      return state;
  }
};

export default navbarDuck;

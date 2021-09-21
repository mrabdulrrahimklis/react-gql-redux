export const GET_CATEGORIES = "getCategories";
export const SET_CATEGORIES = "setCategories";

export const getCategoriesAction = (payload: any) => ({
  type: GET_CATEGORIES,
  payload,
});

export const setCategoriesAction = (payload: any) => ({
  type: SET_CATEGORIES,
  payload,
});

const initialState = {
  categories: [],
  loaded: null,
};

const categoriesDuck = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
        loaded: true,
      };
    }
    case SET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
        loaded: true,
      };
    }
    default:
      return state;
  }
};

export default categoriesDuck;

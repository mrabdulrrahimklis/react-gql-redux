import { call, put } from "redux-saga/effects";
import { setCategoriesAction } from "../../store/categories";
import { getCategories } from "../request/categories.request";

export function* handleCategories(action: any): any {
  try {
    const response = yield call(() => getCategories(action.payload));
    yield put(setCategoriesAction(response.data));
  } catch (e) {
    console.log(e);
  }
}

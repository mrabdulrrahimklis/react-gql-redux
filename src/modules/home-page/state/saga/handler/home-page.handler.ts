import { call, put } from "redux-saga/effects";
import { getProducts } from "../request/home-page.request";
import {
  setProductsAction,
  setProductsErrorAction,
} from "../../store/all-products";

export function* handleProducts(): any {
  try {
    const response = yield call(() => getProducts());
    yield put(setProductsAction(response.data));
  } catch (e) {
    yield put(setProductsErrorAction(e));
    console.log(e);
  }
}

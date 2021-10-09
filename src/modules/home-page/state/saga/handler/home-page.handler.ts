import { call, put } from "redux-saga/effects";
import {
  setProductsAction,
  setProductsErrorAction,
} from "../../store/all-products";
import { getProducts } from "../request/home-page.request";

export function* handleProducts(): any {
  try {
    const { data } = yield call(() => getProducts());
    yield put(setProductsAction(data));
  } catch (e) {
    yield put(setProductsErrorAction(e));
    console.log(e);
  }
}

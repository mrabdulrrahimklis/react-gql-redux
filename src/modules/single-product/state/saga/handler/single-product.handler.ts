import { call, put } from "redux-saga/effects";
import { getSingleProduct } from "../request/single-product.request";
import { setSingleProductAction } from "./../../store/single-product";

export function* handleSingleProduct(action: any): any {
  try {
    const { data } = yield call(() => getSingleProduct(action.payload));
    yield put(setSingleProductAction(data));
  } catch (e) {
    console.log(e);
  }
}

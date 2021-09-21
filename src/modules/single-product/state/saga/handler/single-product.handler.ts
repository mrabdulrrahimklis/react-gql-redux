import { call, put } from "redux-saga/effects";
import { getSingleProduct } from "../request/single-product.request";
import { setSingleProductAction } from "../../store/single-product";

export function* handleSingleProduct(action: any): any {
  try {
    const response = yield call(() => getSingleProduct(action.payload));
    yield put(setSingleProductAction(response.data));
  } catch (e) {
    console.log(e);
  }
}

import { call, put } from "redux-saga/effects";
import { getCategoriesName, getCurrencies } from "../request/nav-bar.request";
import {
  setCategoriesNameAction,
  setCurrenciesAction,
} from "../../store/nav-bar";

export function* handleCategoriesName(): any {
  try {
    const response = yield call(() => getCategoriesName());
    yield put(setCategoriesNameAction(response.data));
  } catch (e) {
    console.log(e);
  }
}
export function* handleCurrencies(): any {
  try {
    const response = yield call(() => getCurrencies());
    yield put(setCurrenciesAction(response.data));
  } catch (e) {
    console.log(e);
  }
}

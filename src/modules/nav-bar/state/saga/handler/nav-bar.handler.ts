import { call, put } from "redux-saga/effects";
import {
  setCategoriesNameAction,
  setCurrenciesAction,
} from "../../store/nav-bar";
import { getCategoriesName, getCurrencies } from "../request/nav-bar.request";

export function* handleCategoriesName(): any {
  try {
    const { data } = yield call(() => getCategoriesName());
    yield put(setCategoriesNameAction(data));
  } catch (e) {
    console.log(e);
  }
}
export function* handleCurrencies(): any {
  try {
    const { data } = yield call(() => getCurrencies());
    yield put(setCurrenciesAction(data));
  } catch (e) {
    console.log(e);
  }
}

import { takeLatest } from "redux-saga/effects";
import { GET_PRODUCTS } from "../../modules/home-page/state/store/all-products";
import { handleProducts } from "../../modules/home-page/state/saga/handler/home-page.handler";
import {
  GET_CATEGORIES_NAME,
  GET_CURRENCIES,
} from "../../modules/nav-bar/state/store/nav-bar";
import {
  handleCategoriesName,
  handleCurrencies,
} from "../../modules/nav-bar/state/saga/handler/nav-bar.handler";
import { GET_SINGLE_PRODUCT } from "../../modules/single-product/state/store/single-product";
import { handleSingleProduct } from "../../modules/single-product/state/saga/handler/single-product.handler";
import { GET_CATEGORIES } from "../../modules/categories/state/store/categories";
import { handleCategories } from "../../modules/categories/state/saga/handler/categories.handler";
export function* watcherSaga() {
  yield takeLatest(GET_PRODUCTS, handleProducts);
  yield takeLatest(GET_CATEGORIES_NAME, handleCategoriesName);
  yield takeLatest(GET_CURRENCIES, handleCurrencies);
  yield takeLatest(GET_CATEGORIES, handleCategories);
  yield takeLatest(GET_SINGLE_PRODUCT, handleSingleProduct);
}

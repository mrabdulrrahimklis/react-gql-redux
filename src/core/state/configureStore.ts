import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./rootSaga";
import navbarDuck from "../../modules/nav-bar/state/store/nav-bar";
import singleProductDuck from "../../modules/single-product/state/store/single-product";
import productsDuck from "../../modules/home-page/state/store/all-products";
import categoriesDuck from "../../modules/categories/state/store/categories";
import selectedProductsDuck from "../../modules/cart/state/store/cart";
const reducer = combineReducers({
  navbarData: navbarDuck,
  products: productsDuck,
  product: singleProductDuck,
  categories: categoriesDuck,
  selectedProducts: selectedProductsDuck,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(watcherSaga);

export default store;

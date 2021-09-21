import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { client } from "./core/services/service";
import HomePage from "./modules/home-page/pages/home-page";
import NavbarOne from "./modules/nav-bar/components/nav-bar";
import CategoriesPage from "./modules/categories/pages/categories";
import { ROUTES } from "./core/constants/routes";
import SingleProductPage from "./modules/single-product/pages/single-product-page";
import Cart from "./modules/cart/components/cart";
import { MainContainer } from "./core/shared";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <MainContainer>
            <NavbarOne />
            <div>
              <Switch>
                <Route exact path={ROUTES.HOME} component={HomePage} />
                <Route
                  exact
                  path={ROUTES.CATEGORIES}
                  component={CategoriesPage}
                />
                <Route
                  exact
                  path={ROUTES.PRODUCT}
                  component={SingleProductPage}
                />
                <Route exact path={ROUTES.CART} component={Cart} />
              </Switch>
            </div>
          </MainContainer>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;

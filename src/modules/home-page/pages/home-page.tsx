import React, { Component } from "react";
import { withRouter } from "react-router";
import { ProductsContainer, Typography } from "../../../core/shared";
import CategoryHeading from "../components/category-heading";
import Product from "../components/product";
import { connect } from "react-redux";
import { getProductsAction } from "../state/store/all-products";

interface HomePageState {
  loaded: boolean | null;
  data: any | null;
}

class HomePage extends Component<any, HomePageState> {
  componentDidMount() {
    this.props.getProductsAction();
  }

  findCurrency(prices: any) {
    const currentPrice = prices?.find(
      (price: any) => price.currency === this.props.currency
    );

    return `${currentPrice.currency} ${currentPrice.amount}`;
  }

  render() {
    return (
      <>
        {this.props.products.loaded === null && (
          <Typography>Loading...</Typography>
        )}
        {!this.props.products.loaded && (
          <Typography>Check your internet...</Typography>
        )}
        {this.props.products.loaded && (
          <>
            {<CategoryHeading heading={"All Products"} />}
            <ProductsContainer marginTop="80px" marginBottom="80px">
              {this.props.products.products?.categories?.map((category: any) =>
                category.products.map((product: any, index: number) => (
                  <Product
                    key={product.id}
                    id={product.id}
                    category={product.category}
                    inStock={product.inStock}
                    image={product.gallery[0]}
                    attributes={product.attributes}
                    name={product.name}
                    price={this.findCurrency(product.prices)}
                  />
                ))
              )}
            </ProductsContainer>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    products: state.products,
    loaded: state.loaded,
    currency: state.navbarData.currency,
    currencies: state.navbarData.currencies,
  };
};

const mapDispatchToProps = {
  getProductsAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HomePage));

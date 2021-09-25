import React, { Component } from "react";
import { withRouter } from "react-router";
import { ProductsContainer, Typography } from "../../../core/shared";
import CategoryHeading from "../../home-page/components/category-heading";
import Product from "../../home-page/components/product";
import { connect } from "react-redux";
import { getCategoriesAction } from "../state/store/categories";
interface CategoriesPageState {
  loaded: boolean | null;
  data: any | null;
}
class CategoriesPage extends Component<any, CategoriesPageState> {
  componentDidMount() {
    const { categories: category } = this.props.match.params;
    this.props.getCategoriesAction(category);
  }

  findCurrency(prices: any) {
    const currentPrice = prices?.find(
      (price: any) => price.currency === this.props.currency
    );

    return `${currentPrice.currency} ${currentPrice.amount}`;
  }

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      const { categories: category } = nextProps.match.params;
      this.props.getCategoriesAction(category);
    }
  }

  render() {
    return (
      <>
        {this.props.categories.loaded === null && (
          <Typography>Loading...</Typography>
        )}
        {!this.props.categories.loaded && (
          <Typography>Check your internet...</Typography>
        )}
        {this.props.categories.loaded && (
          <>
            <CategoryHeading
              heading={this.props.categories.categories.category?.name}
            />
            <ProductsContainer marginTop="80px" marginBottom="80px">
              {this.props.categories.categories?.category?.products.map(
                (product: any, index: number) => {
                  return (
                    <Product
                      key={index}
                      id={product.id}
                      inStock={product.inStock}
                      image={product.gallery[0]}
                      name={product.name}
                      brand={product.brand}
                      category={product.category}
                      attributes={product.attributes}
                      price={this.findCurrency(product.prices)}
                    />
                  );
                }
              )}
            </ProductsContainer>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { categories: state.categories, currency: state.navbarData.currency };
};

const mapDispatchToProps = {
  getCategoriesAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CategoriesPage));

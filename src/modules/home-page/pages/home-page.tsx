import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  CategoryHeading,
  MainPadding,
  ProductsContainer,
} from "../../../core/shared";
import LoadedComponent from "../components/loaded-component";
import LoadingComponent from "../components/loading-component";
import Product from "../components/product";
import { getProductsAction } from "../state/store/all-products";

class HomePage extends Component<any, any> {
  componentDidMount() {
    this.props.getProductsAction();
  }

  render() {
    const {
      products: { loaded, products },
    } = this.props;

    return (
      <MainPadding>
        <LoadingComponent loading={loaded} />
        <LoadedComponent loaded={loaded} />
        {this.props.products.loaded && (
          <>
            {this.props.products.products?.categories && (
              <>
                <CategoryHeading>All Products</CategoryHeading>
                <ProductsContainer>
                  {products?.categories?.map((category: any) =>
                    category.products.map((product: any, index: number) => (
                      <Product
                        key={index}
                        id={product.id}
                        category={product.category}
                        inStock={product.inStock}
                        image={product.gallery}
                        brand={product.brand}
                        description={product.description}
                        attributes={product.attributes}
                        name={product.name}
                        price={product.prices}
                      />
                    ))
                  )}
                </ProductsContainer>
              </>
            )}
          </>
        )}
      </MainPadding>
    );
  }
}

const mapStateToProps = (state: any) => {
  const {
    products,
    loaded,
    navbarData: { currency, currencies },
  } = state;

  return {
    products,
    loaded,
    currency,
    currencies,
  };
};

const mapDispatchToProps = {
  getProductsAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HomePage));

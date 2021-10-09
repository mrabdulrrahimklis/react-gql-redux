import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { MainPadding, SingleProductContainer } from "../../../core/shared";
import SingleProductDetails from "../components/single-product-details";
import SingleProductGallery from "../components/single-product-gallery";
import {
  getSingleProductAction,
  setSingleProductAction,
} from "../state/store/single-product";

class SingleProductPage extends Component<any, any> {
  async initProduct() {
    const {
      match: {
        params: { product },
      },
      setSingleProductAction,
      getSingleProductAction,
    } = this.props;

    setSingleProductAction(product);
    getSingleProductAction(product);
  }

  componentDidMount() {
    this.initProduct();
  }

  render() {
    const {
      product: { product },
    } = this.props;

    return (
      <MainPadding>
        <SingleProductContainer>
          <SingleProductGallery gallery={product?.gallery} />
          {product && (
            <SingleProductDetails
              id={product.id}
              name={product.name}
              brand={product.brand}
              description={product.description}
              price={product.prices}
              attributes={product.attributes}
              inStock={product.inStock}
              image={product.gallery}
            />
          )}
        </SingleProductContainer>
      </MainPadding>
    );
  }
}

const mapStateToProps = (state: any) => {
  const {
    product: { product },
  } = state;
  return { product };
};

const mapDispatchToProps = {
  getSingleProductAction,
  setSingleProductAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SingleProductPage));

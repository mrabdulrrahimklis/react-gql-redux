import React, { Component } from "react";
import { SingleProductBox, Typography } from "../../../core/shared";
import { withRouter } from "react-router";
import SingleProductGallery from "../components/single-product-gallery";
import SingleProductDetails from "../components/single-product-details";
import { getSingleProductAction } from "../state/store/single-product";
import { connect } from "react-redux";

interface SingleProductPageState {
  loaded: boolean | null;
  data: any | null;
}
class SingleProductPage extends Component<any, SingleProductPageState> {
  componentDidMount() {
    const { product } = this.props.match.params;
    this.props.getSingleProductAction(product);
  }

  render() {
    return (
      <>
        {this.props.product.loaded === null && (
          <Typography>Loading...</Typography>
        )}
        {!this.props.product.loaded && (
          <Typography>Check your internet...</Typography>
        )}

        {this.props.product.loaded && (
          <SingleProductBox
            display="grid"
            width="100%"
            gridTemplateColumns="10% 45% 40%"
            gridGap="0px 40px"
            margin="80px 0px"
          >
            <SingleProductGallery
              gallery={this.props.product.product?.product?.gallery}
            />
            <SingleProductDetails
              id={this.props.product.product?.product?.id}
              name={this.props.product.product?.product?.name}
              brand={this.props.product.product?.product?.brand}
              description={this.props.product.product?.product?.description}
              price={this.props.product.product?.product?.prices}
              attributes={this.props.product.product?.product?.attributes}
              inStock={this.props.product.product?.product?.inStock}
              image={this.props.product.product?.product?.gallery}
            />
          </SingleProductBox>
        )}
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { product: state.product };
};

const mapDispatchToProps = {
  getSingleProductAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SingleProductPage));

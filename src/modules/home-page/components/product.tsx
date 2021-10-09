import React, { Component } from "react";
import { connect } from "react-redux";
import ShoppingCart from "../../../assets/CircleIcon.png";
import { findCurrency } from "../../../core/helpers";
import {
  Card,
  CardImage,
  CustomLink,
  MainProductImage,
  MainProductName,
  OutOfStockBox,
  OutOfStockText,
  ProductPriceTypography,
} from "../../../core/shared";
import { addProductToCart } from "../../cart/state/store/cart";
class Product extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      itemType: [],
    };
  }

  async initData() {
    const { attributes } = await this.props;

    attributes?.forEach((attribute: any) => {
      this.setState({
        itemType: [
          ...this.state.itemType,
          {
            value: attribute.items[0].value,
            name: attribute.name,
          },
        ],
      });
    });
  }

  componentDidMount() {
    this.initData();
  }

  addToCart(props: any) {
    const {
      id,
      name,
      brand,
      price,
      description,
      attributes,
      image,
      addProductToCart,
    } = props;

    addProductToCart({
      id,
      name,
      brand,
      description,
      itemType: this.state.itemType,
      price,
      sizes: attributes ? attributes : null,
      image,
      count: 1,
    });
  }

  render() {
    const { inStock, category, id, image, brand, name, price, currency } =
      this.props;

    return inStock ? (
      <Card>
        <CustomLink to={`/categories/${category}/${id}`}>
          <MainProductImage src={image[0]} alt="Product" />
          <MainProductName>{brand + " " + name}</MainProductName>
          <ProductPriceTypography>
            {findCurrency(price, currency)}
          </ProductPriceTypography>
        </CustomLink>
        <CardImage>
          <img
            src={ShoppingCart}
            alt="Cart"
            onClick={() => this.addToCart(this.props)}
          />
        </CardImage>
      </Card>
    ) : (
      <CustomLink to={`/categories/${category}/${id}`}>
        <Card>
          <MainProductImage src={image} alt="Product" />
          <MainProductName>{`${brand} ${name}`}</MainProductName>
          <ProductPriceTypography>
            {findCurrency(price, currency)}
          </ProductPriceTypography>
          <OutOfStockBox>
            <OutOfStockText>Out of stock</OutOfStockText>
          </OutOfStockBox>
        </Card>
      </CustomLink>
    );
  }
}

const mapStateToProps = (state: any) => {
  const {
    navbarData: { currency },
  } = state;
  return {
    currency,
  };
};

const mapDispatchToProps = {
  addProductToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

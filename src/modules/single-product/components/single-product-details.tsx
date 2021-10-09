import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import { connect } from "react-redux";
import { findCurrency, isActive } from "../../../core/helpers";
import {
  AddToCartButton,
  AttributesButton,
  AttributesNameTypography,
  BrandTypography,
  ColorButton,
  NameTypography,
  PriceTypography,
  SimpleText,
  SpecialLeftMarginBox,
} from "../../../core/shared";
import { addProductToCart } from "../../cart/state/store/cart";

class SingleProductDetails extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      itemType: [],
    };
  }

  async initData() {
    const { attributes } = await this.props;

    await attributes?.forEach((attribute: any) => {
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

  chooseSwatch(product: any, item: any) {
    if (
      this.state.itemType
        ?.map((itemType: any) => itemType.name)
        .includes(item.name)
    ) {
      const index = this.state.itemType
        ?.map((itemType: any) => itemType.name)
        .indexOf(item.name);
      this.state.itemType.splice(index, 1);
      this.setState({
        itemType: [
          ...this.state.itemType,
          { name: item.name, value: product.value },
        ],
      });
    }
  }

  componentDidMount() {
    this.initData();
  }

  async addToCart(props: any) {
    const { id, name, brand, price, description, attributes, image } = props;

    this.props.addProductToCart({
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
    const { name, brand, price, description, attributes, inStock, currency } =
      this.props;

    return (
      <>
        <SpecialLeftMarginBox>
          <BrandTypography>{brand}</BrandTypography>
          <NameTypography>{name}</NameTypography>
          {attributes?.map((item: any, index: number) => {
            return (
              <span key={index}>
                <AttributesNameTypography>{item.name}</AttributesNameTypography>
                {item.name === "Color" &&
                  item.items.map((product: any, indexNumber: number) => (
                    <ColorButton
                      isActive={isActive(
                        item.name,
                        this.state.itemType,
                        product
                      )}
                      key={indexNumber}
                      bgColor={product.value}
                      onClick={() => this.chooseSwatch(product, item)}
                    />
                  ))}
                {item.name !== "Color" &&
                  item.items.map((product: any, indexNumber: number) => (
                    <AttributesButton
                      isActive={isActive(
                        item.name,
                        this.state.itemType,
                        product
                      )}
                      key={indexNumber}
                      onClick={() => this.chooseSwatch(product, item)}
                    >
                      {product.value}
                    </AttributesButton>
                  ))}
              </span>
            );
          })}
          <AttributesNameTypography>Price</AttributesNameTypography>
          <PriceTypography>{findCurrency(price, currency)}</PriceTypography>
          <AddToCartButton
            disabled={!inStock}
            onClick={() => this.addToCart(this.props)}
          >
            Add to cart
          </AddToCartButton>
          <SimpleText>{ReactHtmlParser(description)}</SimpleText>
        </SpecialLeftMarginBox>
      </>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductDetails);

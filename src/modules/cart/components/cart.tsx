import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { finalPrice, findCurrency, isActive } from "../../../core/helpers";
import {
  AttributesButton,
  AttributesNameText,
  BoldTextCenter,
  BorderTopBox,
  BrandTypography,
  CartText,
  CountBox,
  FlexBox,
  MainPadding,
  NameTypography,
  PlusAndMinusButton,
  PriceTypography,
  ProductBox,
  SimpleBlockBox,
  SpaceBetweenBox,
} from "../../../core/shared";
import { CartColorButton } from "../../../core/shared/navbar-cart";
import {
  getSelectedProductsAction,
  minusOneProduct,
  plusOneProduct,
  setSelectedProductsAction,
} from "../state/store/cart";
import ImageSlider from "./image-slider";

class Cart extends Component<any, any> {
  componentDidMount() {
    const { getSelectedProductsAction } = this.props;
    getSelectedProductsAction();
  }

  render() {
    const {
      selectedProducts: { selectedProducts, plusOneProduct, minusOneProduct },
      currency,
    } = this.props;

    return (
      <MainPadding>
        <CartText>Cart</CartText>
        {selectedProducts?.map((item: any, index: number) => (
          <BorderTopBox key={index}>
            <ProductBox>
              <div>
                <BrandTypography>{item.brand}</BrandTypography>
                <NameTypography>{item.name}</NameTypography>
                <PriceTypography>
                  {findCurrency(item.price, currency)}
                </PriceTypography>
                {item?.sizes.map((size: any, indexName: number) => {
                  return (
                    <SimpleBlockBox key={indexName}>
                      <AttributesNameText>{size?.name}</AttributesNameText>
                      {size?.name === "Color" &&
                        size.items.map((sizeItem: any, index: number) => {
                          return (
                            <>
                              <CartColorButton
                                isActive={isActive(
                                  size.name,
                                  item.itemType,
                                  sizeItem
                                )}
                                key={index}
                                bgColor={sizeItem.value}
                              />
                            </>
                          );
                        })}
                      {size?.name !== "Color" &&
                        size.items.map((sizeItem: any, indexName: number) => (
                          <AttributesButton
                            key={indexName}
                            isActive={isActive(
                              size.name,
                              item.itemType,
                              sizeItem
                            )}
                          >
                            {sizeItem?.value}
                          </AttributesButton>
                        ))}
                    </SimpleBlockBox>
                  );
                })}
              </div>
              <FlexBox>
                <CountBox>
                  <div>
                    <PlusAndMinusButton onClick={() => plusOneProduct(item)}>
                      +
                    </PlusAndMinusButton>
                  </div>
                  <div>
                    <BoldTextCenter>{item.count}</BoldTextCenter>
                  </div>
                  <div>
                    <PlusAndMinusButton onClick={() => minusOneProduct(item)}>
                      -
                    </PlusAndMinusButton>
                  </div>
                </CountBox>
                <ImageSlider item={item} />
              </FlexBox>
            </ProductBox>
          </BorderTopBox>
        ))}
        <BorderTopBox>
          <SpaceBetweenBox>
            <BrandTypography>Total</BrandTypography>
            <NameTypography>{`${currency} ${finalPrice(
              selectedProducts,
              currency
            ).toFixed(2)}`}</NameTypography>
          </SpaceBetweenBox>
        </BorderTopBox>
      </MainPadding>
    );
  }
}

const mapStateToProps = (state: any) => {
  const {
    selectedProducts,
    navbarData: { currency },
  } = state;

  return {
    selectedProducts,
    currency,
  };
};

const mapDispatchToProps = {
  getSelectedProductsAction,
  setSelectedProductsAction,
  plusOneProduct,
  minusOneProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cart));

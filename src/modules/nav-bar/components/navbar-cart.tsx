import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  finalPrice,
  findCurrency,
  isActive,
  numberOfItemsInCart,
} from "../../../core/helpers";
import {
  BlockBox,
  BoldTextCenter,
  BoldTextLeft,
  BoldTextRight,
  CheckOutButton,
  CountBox,
  FlexBox,
  FlexEndBox,
  NavbarCartContainer,
  PlusAndMinusButton,
  ProductBox,
  ProductImage,
  ProductInfoBox,
  SimpleBlockBox,
  SimpleTypography,
  SizesButton,
  SpaceBetweenBox,
  TextLeft,
  ViewBagButton,
} from "../../../core/shared";
import { CartColorButton } from "../../../core/shared/navbar-cart";
import {
  getSelectedProductsAction,
  minusOneProduct,
  plusOneProduct,
  setSelectedProductsAction,
} from "../../cart/state/store/cart";
import { setOpenCartAction } from "../state/store/nav-bar";

class NavbarCart extends Component<any, any> {
  render() {
    const {
      setOpenCartAction,
      plusOneProduct,
      minusOneProduct,
      currency,
      selectedProducts: { selectedProducts },
    } = this.props;

    return (
      <>
        <NavbarCartContainer
          onClick={() => setOpenCartAction(false)}
        ></NavbarCartContainer>
        <FlexEndBox>
          <BlockBox onClick={() => setOpenCartAction(true)}>
            <FlexBox>
              <SimpleTypography>
                <strong>My Bag,</strong>
                {` ${numberOfItemsInCart(selectedProducts)} items`}
              </SimpleTypography>
            </FlexBox>
            {selectedProducts?.map((item: any, index: number) => (
              <ProductBox key={index}>
                <ProductInfoBox>
                  <SimpleBlockBox>
                    <TextLeft>{item.brand}</TextLeft>
                    <TextLeft>{item.name}</TextLeft>
                    <BoldTextLeft>
                      {findCurrency(item.price, currency)}
                    </BoldTextLeft>
                  </SimpleBlockBox>

                  {item?.sizes.map((size: any, indexName: number) => {
                    return (
                      <SimpleBlockBox key={indexName}>
                        <SimpleBlockBox>{size?.name}</SimpleBlockBox>
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
                            <SizesButton
                              key={indexName}
                              isActive={isActive(
                                size.name,
                                item.itemType,
                                sizeItem
                              )}
                            >
                              {sizeItem?.value}
                            </SizesButton>
                          ))}
                      </SimpleBlockBox>
                    );
                  })}
                </ProductInfoBox>
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
                  <ProductImage src={item.image[0]} alt="Product" />
                </FlexBox>
              </ProductBox>
            ))}
            <SpaceBetweenBox>
              <p>
                <strong>Total</strong>
              </p>
              <BoldTextRight>
                {`${currency} ${finalPrice(selectedProducts, currency).toFixed(
                  2
                )}`}
              </BoldTextRight>
            </SpaceBetweenBox>
            <SpaceBetweenBox>
              <Link to="/cart">
                <ViewBagButton>View bag</ViewBagButton>
              </Link>
              <Link to="/cart">
                <CheckOutButton>Check out</CheckOutButton>
              </Link>
            </SpaceBetweenBox>
          </BlockBox>
        </FlexEndBox>
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  const {
    navbarData,
    selectedProducts,
    navbarData: { currency },
  } = state;

  return {
    navbarData,
    selectedProducts,
    currency,
  };
};

const mapDispatchToProps = {
  getSelectedProductsAction,
  setSelectedProductsAction,
  setOpenCartAction,
  plusOneProduct,
  minusOneProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(NavbarCart);

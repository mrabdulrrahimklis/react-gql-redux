import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  ButtonHover,
  Image,
  MobileBox,
  SingleProductBox,
  Typography,
} from "../../../core/shared";
import {
  getSelectedProductsAction,
  setSelectedProductsAction,
  plusOneProduct,
  minusOneProduct,
} from "../../cart/state/store/cart";
import { connect } from "react-redux";
import { IPrice } from "../models/navbar-model";

class NavbarCart extends Component<any, any> {
  findCurrency(prices: any) {
    const currentPrice = prices?.find(
      (price: any) => price.currency === this.props.currency
    );

    return `${currentPrice.currency} ${currentPrice.amount}`;
  }

  finalPrice() {
    const finalPrices = this.props.selectedProducts?.selectedProducts?.map(
      (finalPriceItem: any) => {
        let currentItem = finalPriceItem.price.find(
          (item: IPrice) => item.currency === this.props.currency
        );

        return {
          ...currentItem,
          amount: currentItem.amount * finalPriceItem.count,
        };
      }
    );

    return finalPrices
      ?.map((item: IPrice) => +item.amount)
      .reduce(
        (previousValue: number, currentValue: number) =>
          previousValue + currentValue,
        0
      );
  }

  render() {
    return (
      <>
        <MobileBox
          bgColor="rgba(57, 55, 72, 0.22)"
          position="absolute"
          width="100%"
          height="100%"
          zIndex="99"
          right="0"
          top="70"
          padding="0 70px 0 0"
        >
          <Box
            display="flex"
            justifyContent="flex-end"
            onClick={() => this.setState({ showCart: false })}
          >
            <Box
              bgColor="white"
              display="block"
              boxShadow="0px 4px 35px rgba(168, 172, 176, 0.19)"
              width="400px"
              padding="20px"
              maxHeight="400px"
              overflow="auto"
            >
              <Box display="flex">
                <Typography
                  fontWeight="bold"
                  marginRight="10px"
                  fontSize="16px"
                >
                  My Bag,
                </Typography>
                <Typography fontSize="16px">
                  {this.props?.selectedProducts.selectedProducts.length} items
                </Typography>
              </Box>

              {this.props?.selectedProducts.selectedProducts.map(
                (item: any, index: number) => (
                  <SingleProductBox
                    key={index}
                    display="flex"
                    justifyContent="space-between"
                    margin="30px 0px"
                  >
                    <Box>
                      <Typography
                        fontStyle="normal"
                        fontWeight="300"
                        fontSize="16px"
                        textAlign="left"
                      >
                        {item.brand}
                      </Typography>
                      <Typography
                        fontStyle="normal"
                        fontWeight="300"
                        fontSize="16px"
                        textAlign="left"
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        fontStyle="normal"
                        fontWeight="500"
                        fontSize="16px"
                        marginTop="10px"
                        textAlign="left"
                      >
                        {this.findCurrency(item.price)}
                      </Typography>
                      {item.sizes[0]?.name}
                      <Box
                        display="flex"
                        overflow="auto"
                        maxWidth="200px"
                        margin="0px 0px 10px 0px"
                      >
                        {item.sizes[0]?.items.map(
                          (size: any, index: number) => (
                            <ButtonHover
                              key={index}
                              fontSize="12px"
                              fontWeight="normal"
                              bgColor="white"
                              color="#1D1F22"
                              border="1px solid #1D1F22"
                              padding="10px"
                              marginTop="20px"
                              marginRight="10px"
                              isActive={size.value === item.itemSize}
                            >
                              {size.value}
                            </ButtonHover>
                          )
                        )}
                      </Box>
                      {item.sizes[1]?.name}
                      <Box
                        display="flex"
                        overflow="auto"
                        maxWidth="200px"
                        margin="0px 0px 10px 0px"
                      >
                        {item.sizes[1]?.items.map(
                          (swatch: any, index: number) => (
                            <ButtonHover
                              bgColor="#4f4f4f4f"
                              color={swatch.value}
                              cursor
                              key={index}
                              fontSize="12px"
                              fontWeight="normal"
                              border={`1px solid ${swatch.value}`}
                              padding="2px"
                              marginTop="5px"
                              marginRight="2px"
                              height="20px"
                              isActiveSwatch={swatch.value === item.itemSwatch}
                            >
                              {swatch.displayValue}
                            </ButtonHover>
                          )
                        )}
                      </Box>
                    </Box>

                    <Box display="flex">
                      <Box display="block" margin="0px 20px 0px 0px">
                        <ButtonHover
                          fontSize="12px"
                          fontWeight="normal"
                          bgColor="white"
                          color="#1D1F22"
                          border="1px solid #1D1F22"
                          padding="10px"
                          marginBottom="18px"
                          width="45px"
                          onClick={() => this.props.plusOneProduct(item)}
                        >
                          +
                        </ButtonHover>

                        <Typography
                          fontStyle="normal"
                          fontWeight="500"
                          fontSize="16px"
                          textAlign="center"
                        >
                          {item.count}
                        </Typography>
                        <ButtonHover
                          fontSize="12px"
                          fontWeight="normal"
                          bgColor="white"
                          color="#1D1F22"
                          border="1px solid #1D1F22"
                          padding="10px"
                          marginTop="18px"
                          width="45px"
                          onClick={() => this.props.minusOneProduct(item)}
                        >
                          -
                        </ButtonHover>
                      </Box>

                      <Image
                        src={item.image[0]}
                        alt="Product"
                        width="130"
                        objectFit="contain"
                        height="130"
                      />
                    </Box>
                  </SingleProductBox>
                )
              )}

              <Box display="flex" justifyContent="space-between">
                <Typography fontStyle="normal" fontWeight="500" fontSize="16px">
                  Total
                </Typography>

                <Typography
                  fontStyle="normal"
                  fontWeight="bold"
                  fontSize="16px"
                  textAlign="right"
                >
                  {`${this.finalPrice().toFixed(2)} ${this.props.currency}`}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Link to="/cart">
                  <Button
                    marginTop="30px"
                    bgColor="#ffffff"
                    color="#1D1F22"
                    border="1px solid black"
                    padding="16px 40px"
                    textTransform="uppercase"
                    fontSize="14px"
                    fontWeight="600"
                  >
                    View bag
                  </Button>
                </Link>
                <Link to="/cart">
                  <Button
                    marginTop="30px"
                    bgColor="#5ECE7B"
                    padding="16px 40px"
                    textTransform="uppercase"
                    fontSize="14px"
                    fontWeight="600"
                  >
                    Check out
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </MobileBox>
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    selectedProducts: state.selectedProducts,
    currency: state.navbarData.currency,
  };
};

const mapDispatchToProps = {
  getSelectedProductsAction,
  setSelectedProductsAction,
  plusOneProduct,
  minusOneProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(NavbarCart);

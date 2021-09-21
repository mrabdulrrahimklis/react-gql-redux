import React, { Component } from "react";
import {
  Box,
  ButtonHover,
  Image,
  SingleProductBox,
  Typography,
} from "../../../core/shared";
import { withRouter } from "react-router";
import {
  getSelectedProductsAction,
  minusOneProduct,
  plusOneProduct,
  setSelectedProductsAction,
} from "../state/store/cart";
import { connect } from "react-redux";
import VectorLeft from "../../../assets/VectorLeft.png";
import VectorRight from "../../../assets/VectorRight.png";
import { IPrice } from "../../nav-bar/models/navbar-model";

class Cart extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      imageIndex: 0,
    };
  }

  componentDidMount() {
    this.props.getSelectedProductsAction();
  }

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

  previousImage = (itemsLength: number) => {
    if (this.state.imageIndex === 0) {
      this.setState({
        imageIndex: itemsLength - 1,
      });
    } else {
      this.setState({
        imageIndex: this.state.imageIndex - 1,
      });
    }
  };

  nextImage = (itemsLength: number) => {
    if (this.state.imageIndex < itemsLength - 1) {
      this.setState({
        imageIndex: this.state.imageIndex + 1,
      });
    } else {
      this.setState({
        imageIndex: 0,
      });
    }
  };

  render() {
    return (
      <div>
        <Typography
          marginTop="50px"
          marginBottom="80px"
          textTransform="uppercase"
          fontWeight="bold"
          fontSize="32px"
        >
          Cart
        </Typography>
        {this.props.selectedProducts?.selectedProducts.map(
          (item: any, index: number) => (
            <Box
              key={index}
              borderTop="2px solid #E5E5E5"
              padding="20px 0px"
              width="90%"
            >
              <SingleProductBox display="flex" justifyContent="space-between">
                <Box>
                  <Typography
                    fontStyle="normal"
                    fontWeight="600"
                    fontSize="30px"
                  >
                    {item.brand}
                  </Typography>
                  <Typography
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="30px"
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    fontStyle="normal"
                    fontWeight="bold"
                    fontSize="24px"
                    marginTop="10px"
                  >
                    {this.findCurrency(item.price)}
                  </Typography>
                  <Box display="flex" margin="0px 0px 10px 0px">
                    {item.sizes[0]?.items.map((size: any, index: number) => (
                      <div key={index}>
                        <ButtonHover
                          padding="16px"
                          color="#1D1F22"
                          bgColor="white"
                          fontSize="16px"
                          border="1px solid #1D1F22"
                          marginTop="10px"
                          marginRight="20px"
                          isActive={size.value === item.itemSize}
                        >
                          {size.value}
                        </ButtonHover>
                      </div>
                    ))}
                  </Box>
                </Box>

                <Box display="flex">
                  <Box display="block" margin="0px 20px 0px 0px">
                    <ButtonHover
                      onClick={() => this.props.plusOneProduct(item)}
                      padding="16px"
                      width="55px"
                      color="#1D1F22"
                      bgColor="white"
                      border="1px solid #1D1F22"
                      marginBottom="24px"
                    >
                      +
                    </ButtonHover>
                    <Typography
                      fontStyle="normal"
                      fontWeight="500"
                      fontSize="24px"
                      textAlign="center"
                    >
                      {item.count}
                    </Typography>

                    <ButtonHover
                      onClick={() => this.props.minusOneProduct(item)}
                      padding="16px"
                      width="55px"
                      color="#1D1F22"
                      bgColor="white"
                      border="1px solid #1D1F22"
                      marginTop="24px"
                    >
                      -
                    </ButtonHover>
                  </Box>
                  <Box>
                    <Box position="absolute" zIndex="1">
                      <Image
                        src={item.image[this.state.imageIndex]}
                        alt="Product"
                        width="180px"
                        height="180"
                      />
                    </Box>

                    <Box
                      position="relative"
                      zIndex="2"
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      height="100%"
                      width="180px"
                    >
                      <Box padding="0px 10px">
                        <Image
                          src={VectorLeft}
                          height="10px"
                          width="10px"
                          onClick={() => this.previousImage(item.image.length)}
                        />
                      </Box>
                      <Box padding="0px 10px">
                        <Image
                          src={VectorRight}
                          height="10px"
                          width="10px"
                          onClick={() => this.nextImage(item.image.length)}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </SingleProductBox>
            </Box>
          )
        )}
        <hr />
        <Box display="flex" justifyContent="space-between">
          <Typography fontStyle="normal" fontWeight="500" fontSize="26px">
            Total
          </Typography>

          <Typography
            fontStyle="normal"
            fontWeight="bold"
            fontSize="26px"
            textAlign="right"
          >
            {`${this.finalPrice().toFixed(2)} ${this.props.currency}`}
          </Typography>
        </Box>
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cart));

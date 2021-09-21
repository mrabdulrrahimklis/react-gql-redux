import React, { Component } from "react";
import {
  Box,
  Button,
  ButtonHover,
  Typography,
  SpecialMobileBox,
} from "../../../core/shared";
import { connect } from "react-redux";
import { addProductToCart } from "../../cart/state/store/cart";

class SingleProductDetails extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      itemSize: null,
      itemSwatch: null,
      showMessage: false,
      showError: false,
    };
  }

  addToCart(props: any) {
    const { id, name, brand, price, description, attributes, image } = props;

    if (
      (!attributes?.[1] && this.state.itemSize) ||
      (attributes?.[1] && this.state.itemSwatch && this.state.itemSize)
    ) {
      this.props.addProductToCart({
        id,
        name,
        brand,
        description,
        itemSize: this.state.itemSize,
        itemSwatch: this.state.itemSwatch,
        price,
        sizes: attributes ? attributes : null,
        image,
        count: 1,
      });

      this.setState({
        showMessage: true,
      });

      setTimeout(
        () =>
          this.setState({
            showMessage: false,
          }),
        3000
      );
    } else {
      this.setState({
        showError: true,
      });

      setTimeout(
        () =>
          this.setState({
            showError: false,
          }),
        3000
      );
    }

    this.setState({
      itemSize: null,
      itemSwatch: null,
    });
  }

  findCurrency(prices: any) {
    const currentPrice = prices?.find(
      (price: any) => price.currency === this.props.currency
    );

    return `${currentPrice.currency} ${currentPrice.amount}`;
  }

  render() {
    const { name, brand, price, description, attributes } = this.props;

    return (
      <>
        <SpecialMobileBox margin="0px 0px 0px 80px">
          <Typography fontStyle="normal" fontWeight="600" fontSize="30px">
            {brand}
          </Typography>
          <Typography fontStyle="normal" fontWeight="normal" fontSize="30px">
            {name}
          </Typography>
          {attributes?.[0] && (
            <>
              <Typography
                marginTop="80px"
                marginBottom="10px"
                fontWeight="bold"
                fontSize="18px"
                textTransform="uppercase"
              >
                {attributes?.[0]?.name}
              </Typography>
              <Box width="300px">
                {attributes[0]?.items?.map((size: any, index: number) => (
                  <ButtonHover
                    isActive={size.value === this.state.itemSize}
                    cursor
                    key={index}
                    fontSize="16px"
                    fontWeight="normal"
                    bgColor="white"
                    color="#1D1F22"
                    border="1px solid #1D1F22"
                    padding="16px"
                    marginTop="5px"
                    marginRight="20px"
                    onClick={() => this.setState({ itemSize: size.value })}
                  >
                    {size.value}
                  </ButtonHover>
                ))}
              </Box>

              {attributes?.[1] && (
                <>
                  <Typography
                    marginTop="80px"
                    marginBottom="10px"
                    fontWeight="bold"
                    fontSize="18px"
                    textTransform="uppercase"
                  >
                    {attributes?.[1]?.name}
                  </Typography>
                  <Box width="300px">
                    {attributes[1]?.items?.map((swatch: any, index: number) => (
                      <ButtonHover
                        isActiveSwatch={swatch.value === this.state.itemSwatch}
                        bgColor={swatch.value}
                        cursor
                        key={index}
                        fontSize="12px"
                        fontWeight="normal"
                        color="#1D1F22"
                        border="1px solid #1D1F22"
                        padding="2px"
                        marginTop="5px"
                        marginRight="2px"
                        height="20px"
                        onClick={() =>
                          this.setState({ itemSwatch: swatch.value })
                        }
                      >
                        {swatch.displayValue}
                      </ButtonHover>
                    ))}
                  </Box>
                </>
              )}
            </>
          )}
          <Typography
            fontWeight="bold"
            fontSize="18px"
            marginTop="80px"
            marginBottom="20px"
            textTransform="uppercase"
          >
            Price
          </Typography>
          <Typography fontStyle="normal" fontWeight="bold" fontSize="24px">
            {price && this.findCurrency(price)}
          </Typography>
          <Button
            cursor
            marginTop="35px"
            padding="16px 32px"
            textTransform="uppercase"
            fontSize="16px"
            fontWeight="600"
            width="295px"
            bgColor="#5ECE7B"
            onClick={() => this.addToCart(this.props)}
          >
            Add to cart
          </Button>
          {this.state.showMessage && (
            <Typography
              fontStyle="normal"
              fontWeight="bold"
              fontSize="24px"
              color="green"
            >
              You added item in bag!
            </Typography>
          )}

          {this.state.showError && (
            <Typography
              fontStyle="normal"
              fontWeight="bold"
              fontSize="24px"
              color="red"
            >
              Please choose Size and Swatch
            </Typography>
          )}

          <Typography
            fontStyle="normal"
            fontWeight="normal"
            fontSize="16px"
            width="300px"
            lineHeight="1.5"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </SpecialMobileBox>
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    currency: state.navbarData.currency,
  };
};

const mapDispatchToProps = {
  addProductToCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductDetails);

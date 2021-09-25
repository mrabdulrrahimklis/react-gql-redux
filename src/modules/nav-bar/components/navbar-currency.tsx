import React, { Component } from "react";
import { Box, ButtonHover, MobileBox } from "../../../core/shared";
import { setCurrency } from "../state/store/nav-bar";
import { connect } from "react-redux";

class NavbarCurrency extends Component<any, any> {
  render() {
    return (
      <MobileBox
        position="absolute"
        zIndex="99"
        right="0"
        top="60"
        width="100%"
        height="100%"
        padding="0 100px 0 0"
      >
        <Box
          display="flex"
          justifyContent="flex-end"
          margin="-10px 40px 0px 0px"
          width="100%"
        >
          <MobileBox
            display="block"
            width="120px"
            bgColor="white"
            boxShadow="0px 4px 35px rgba(168, 172, 176, 0.19)"
          >
            {this.props.currencies?.map((item: string, index: number) => (
              <ButtonHover
                isActive={this.props.currentCurrency === item}
                width='100%'
                bgColor="white"
                padding="10px 15px 10px 0"
                color="black"
                onClick={() => !(this.props.currentCurrency === item) && this.props.setCurrency(item)}
              >
                {item}
              </ButtonHover>
            ))}
          </MobileBox>
        </Box>
      </MobileBox>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    currency: state.navbarData.currency,
    currentCurrency: state.navbarData.currency,
  };
};

const mapDispatchToProps = {
  setCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarCurrency);

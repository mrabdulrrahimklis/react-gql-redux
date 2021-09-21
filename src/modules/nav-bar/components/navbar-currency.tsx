import React, { Component } from "react";
import { Box, Button, MobileBox } from "../../../core/shared";
import { setCurrency } from "../state/store/nav-bar";
import { connect } from "react-redux";

class NavbarCurrency extends Component<any> {
  render() {
    return (
      <MobileBox
        position="absolute"
        zIndex="99"
        right="0"
        top="60"
        width="100%"
        height="100%"
        padding="0 70px 0 0"
      >
        <Box
          display="flex"
          justifyContent="flex-end"
          margin="-10px 20px 0px 0px"
          width="100%"
        >
          <MobileBox
            display="block"
            width="100px"
            bgColor="white"
            boxShadow="0px 4px 35px rgba(168, 172, 176, 0.19)"
          >
            {this.props.currencies?.map((item: string, index: number) => (
              <Box key={index}>
                <Button
                  bgColor="white"
                  padding="10px"
                  color="black"
                  onClick={() => this.props.setCurrency(item)}
                >
                  {item}
                </Button>
              </Box>
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
  };
};

const mapDispatchToProps = {
  setCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarCurrency);

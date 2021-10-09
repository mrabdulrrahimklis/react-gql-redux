import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BlockWhiteBox,
  CurrenciesButton,
  FlexAndMarginBox,
  NavbarCurrenciesContainer,
} from "../../../core/shared";
import { setCurrency } from "../state/store/nav-bar";

class NavbarCurrency extends Component<any, any> {
  render() {
    const { currency, currencies, setCurrency } = this.props;

    return (
      <NavbarCurrenciesContainer>
        <FlexAndMarginBox>
          <BlockWhiteBox>
            {currencies?.map((item: string, index: number) => (
              <CurrenciesButton
                key={index}
                isActive={currency === item}
                onClick={() => !(currency === item) && setCurrency(item)}
              >
                {item}
              </CurrenciesButton>
            ))}
          </BlockWhiteBox>
        </FlexAndMarginBox>
      </NavbarCurrenciesContainer>
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
  setCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarCurrency);

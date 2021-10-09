import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Arrow from "../../../assets/Arrow.png";
import BrandIcon from "../../../assets/Brandicon.png";
import ShoppingCart from "../../../assets/Vector.png";
import ArrowTwo from "../../../assets/VectorTwo.png";
import { isActiveMenuItem, numberOfItemsInCart } from "../../../core/helpers";
import {
  ButtonWhite,
  CustomLink,
  FlexCenterContainer,
  FlexContainerNavbar,
  ImageNavbar,
  NavbarHeading,
  NavbarPaddingContainer,
  NumberOfItemsBox,
  NumberOfItemsText,
  NumberOfProductsContainer,
} from "../../../core/shared";
import {
  getCategoriesNameAction,
  getCurrenciesAction,
  setCurrency,
  setOpenCartAction,
  setOpenCurrenciesAction,
} from "../state/store/nav-bar";
import Cart from "./navbar-cart";
import Currency from "./navbar-currency";

export interface NavbarOneProps {
  data?: any;
}

export interface ICategories {
  categories: ICategory[];
}

export interface ICategory {
  name: string;
  __typename: string;
}

class NavbarOne extends Component<any, any> {
  componentDidMount() {
    this.props.getCategoriesNameAction();
    this.props.getCurrenciesAction();
  }

  render() {
    const {
      navbarData,
      setOpenCartAction,
      setOpenCurrenciesAction,
      currentCurrency,
      numberOfItemsInCard,
      location,
      selectedProducts: { selectedProducts },
    } = this.props;

    return (
      <>
        <FlexContainerNavbar
          onClick={() => {
            if (navbarData.showCart === true || navbarData.open === true) {
              setOpenCartAction(false);
              setOpenCurrenciesAction(false);
            }
          }}
        >
          <FlexCenterContainer>
            {navbarData.categoriesName?.categories?.map(
              (category: any, index: number) => (
                <CustomLink to={`/categories/${category.name}`} key={index}>
                  <NavbarHeading
                    isActive={isActiveMenuItem(location, category.name)}
                  >
                    {category.name}
                  </NavbarHeading>
                </CustomLink>
              )
            )}
          </FlexCenterContainer>
          <FlexCenterContainer>
            <Link to="/">
              <img src={BrandIcon} alt="Brand Icon" />
            </Link>
          </FlexCenterContainer>
          <FlexCenterContainer>
            <FlexCenterContainer
              onClick={() => {
                setOpenCurrenciesAction(!navbarData.open);
                setOpenCartAction(false);
              }}
            >
              <FlexCenterContainer>{currentCurrency}</FlexCenterContainer>
              <NavbarPaddingContainer>
                <ButtonWhite>
                  {navbarData.open ? (
                    <ImageNavbar src={ArrowTwo} alt="Less" />
                  ) : (
                    <ImageNavbar src={Arrow} alt="More" />
                  )}
                </ButtonWhite>
              </NavbarPaddingContainer>
            </FlexCenterContainer>
            <NavbarPaddingContainer>
              <ButtonWhite
                onClick={() => {
                  setOpenCartAction(!navbarData.showCart);
                  setOpenCurrenciesAction(false);
                }}
              >
                <ImageNavbar src={ShoppingCart} alt="Shopping Cart" />
                <NumberOfProductsContainer>
                  {numberOfItemsInCard ? (
                    <NumberOfItemsBox>
                      <NumberOfItemsText>
                        {numberOfItemsInCart(selectedProducts)}
                      </NumberOfItemsText>
                    </NumberOfItemsBox>
                  ) : (
                    <></>
                  )}
                </NumberOfProductsContainer>
              </ButtonWhite>
            </NavbarPaddingContainer>
          </FlexCenterContainer>
        </FlexContainerNavbar>
        {navbarData.open && (
          <div onClick={() => setOpenCurrenciesAction(!navbarData.open)}>
            <Currency
              currencies={navbarData.currencies?.currencies}
              open={navbarData.open}
            />
          </div>
        )}
        {navbarData.showCart && (
          <div>
            <Cart />
          </div>
        )}
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
    currentCurrency: currency,
    numberOfItemsInCard: selectedProducts.selectedProducts.length,
  };
};

const mapDispatchToProps = {
  getCategoriesNameAction,
  getCurrenciesAction,
  setOpenCartAction,
  setOpenCurrenciesAction,
  setCurrency,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavbarOne));

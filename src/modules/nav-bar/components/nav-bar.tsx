import { Component } from "react";
import { Link } from "react-router-dom";
import Arrow from "../../../assets/Arrow.png";
import BrandIcon from "../../../assets/Brandicon.png";
import ShoppingCart from "../../../assets/Vector.png";
import ArrowTwo from "../../../assets/VectorTwo.png";
import {
  Box,
  Button,
  CustomLink,
  FlexContainer,
  Image,
  NavbarHeading,
  Typography,
} from "../../../core/shared";
import Cart from "./navbar-cart";
import Currency from "./navbar-currency";
import { connect } from "react-redux";
import {
  getCategoriesNameAction,
  getCurrenciesAction,
  setOpenCartAction,
  setOpenCurrenciesAction,
  setCurrency,
} from "../state/store/nav-bar";
import { withRouter } from "react-router";

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

  isActive(name: string) {
    return !!this.props.location.pathname.includes(name);
  }

  render() {
    return (
      <>
        <FlexContainer
           padding={'0 70px'}
           justifyContent="space-between"
           onClick={() => {
             if(this.props.navbarData.showCart === true || this.props.navbarData.open === true) {
               this.props.setOpenCartAction(false);
               this.props.setOpenCurrenciesAction(false);
             }
           }}
        >
          <FlexContainer justifyContent="center">
            {this.props.navbarData.categoriesName?.categories?.map(
              (category: any, index: number) => (
                <CustomLink to={`/categories/${category.name}`} key={index}>
                  <NavbarHeading
                    isActive={this.isActive(category.name)}
                    color="#1D1F22"
                    fontWeight="10"
                    textTransform="uppercase"
                  >
                    {category.name}
                  </NavbarHeading>
                </CustomLink>
              )
            )}
          </FlexContainer>
          <FlexContainer>
            <Link to="/">
              <img src={BrandIcon} alt="Brand Icon" />
            </Link>
          </FlexContainer>
          <FlexContainer display="flex" justifyContent="center" >
            <Box display='flex' onClick={() => {
              this.props.setOpenCurrenciesAction(
                  !this.props.navbarData.open
              );
              this.props.setOpenCartAction(false);
            }}>
            <Box>
              {this.props.currentCurrency}
            </Box>
            <Box padding="0px 20px 0px 3px">
              <Button
                bgColor="white"
              >
                {this.props.navbarData.open ? (
                    <Image src={ArrowTwo} alt="Less" />
                ) : (
                    <Image src={Arrow} alt="More" />
                )}
              </Button>
            </Box>
            </Box>
            <Box padding="0px 20px 0px 3px"   >
              <Button
                bgColor="white"
                onClick={() => {
                  this.props.setOpenCartAction(!this.props.navbarData.showCart);
                  this.props.setOpenCurrenciesAction(false);
                }}
              >
                <Image src={ShoppingCart} alt="Shopping Cart" />
                <Box position="absolute" margin="-30px 0px 0px 13px">
                  {this.props.numberOfItemsInCard && (
                    <Box
                      borderRadius="50%"
                      bgColor="#1D1F22"
                      color="white"
                      height="20px"
                      width="20px"
                    >
                      <Typography
                        fontWeight="bold"
                        fontSize="12px"
                        color="white"
                        lineHeight="20px"
                      >
                        {this.props.numberOfItemsInCard}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Button>
            </Box>
          </FlexContainer>
        </FlexContainer>
        {this.props.navbarData.open && (
          <div
            onClick={() =>
              this.props.setOpenCurrenciesAction(!this.props.navbarData.open)
            }
          >
            <Currency
              currencies={this.props.navbarData.currencies?.currencies}
              open={this.props.navbarData.open}
            />
          </div>
        )}
        {this.props.navbarData.showCart && (
          <div
            onClick={() =>
              this.props.setOpenCartAction(!this.props.navbarData.showCart)
            }
          >
            <Cart />
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    navbarData: state.navbarData,
    currentCurrency: state.navbarData.currency,
    numberOfItemsInCard: state.selectedProducts.selectedProducts.length,
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

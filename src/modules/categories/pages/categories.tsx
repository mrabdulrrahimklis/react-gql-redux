import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  CategoryHeading,
  MainPadding,
  ProductsContainer,
} from "../../../core/shared";
import LoadedComponent from "../../home-page/components/loaded-component";
import LoadingComponent from "../../home-page/components/loading-component";
import Product from "../../home-page/components/product";
import { getCategoriesAction } from "../state/store/categories";
interface CategoriesPageState {
  loaded: boolean | null;
  data: any | null;
}
class CategoriesPage extends Component<any, CategoriesPageState> {
  componentDidMount() {
    const { categories: category } = this.props.match.params;
    this.props.getCategoriesAction(category);
  }

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      const { categories: category } = nextProps.match.params;
      this.props.getCategoriesAction(category);
    }
  }

  render() {
    const {
      categories: {
        categories: { category },
      },
      categories: { loaded },
    } = this.props;

    return (
      <MainPadding>
        <LoadingComponent loading={loaded} />
        <LoadedComponent loaded={loaded} />
        {loaded && (
          <>
            <CategoryHeading>{category?.name}</CategoryHeading>
            {category && (
              <ProductsContainer>
                {category?.products.map((product: any, index: number) => {
                  return (
                    <Product
                      key={index}
                      id={product.id}
                      inStock={product.inStock}
                      image={product.gallery}
                      name={product.name}
                      description={product.description}
                      brand={product.brand}
                      category={product.category}
                      attributes={product.attributes}
                      price={product.prices}
                    />
                  );
                })}
              </ProductsContainer>
            )}
          </>
        )}
      </MainPadding>
    );
  }
}

const mapStateToProps = (state: any) => {
  const {
    categories,
    navbarData: { currency },
  } = state;
  return { categories, currency };
};

const mapDispatchToProps = {
  getCategoriesAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CategoriesPage));

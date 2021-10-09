import React, { Component } from "react";
import {
  NormalProductImage,
  SingleProductImages,
  SmallProductImage,
  SpecialRightMarginBox,
} from "../../../core/shared";
class SingleProductGallery extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      index: 0,
    };
  }

  render() {
    const { gallery } = this.props;

    return (
      <>
        <SingleProductImages>
          {gallery?.map((image: any, index: number) => (
            <SmallProductImage
              onClick={() => this.setState({ index })}
              src={image}
              key={index}
              alt="Product"
            />
          ))}
        </SingleProductImages>
        <SpecialRightMarginBox>
          {gallery && (
            <NormalProductImage src={gallery[this.state.index]} alt="Product" />
          )}
        </SpecialRightMarginBox>
      </>
    );
  }
}

export default SingleProductGallery;

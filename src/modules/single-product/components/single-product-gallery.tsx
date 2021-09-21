import React, { Component } from "react";
import {
  Image,
  SingleProductImages,
  SpecialMobileBox,
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
        <SingleProductImages
          margin="0px 20px 0px 0px"
          padding="1%"
          maxHeight="800px"
          overflow="auto"
        >
          {gallery?.map((image: any, index: number) => (
            <Image
              cursorPointer
              onClick={() => this.setState({ index })}
              src={image}
              key={index}
              alt="Product"
              width="100%"
              objectFit="contain"
              height="120px"
              margin="0px 0px 15px 0px"
            />
          ))}
        </SingleProductImages>
        <SpecialMobileBox margin="0px 15px 0px 0px">
          {gallery && (
            <Image
              src={gallery[this.state.index]}
              alt="Product"
              width="100%"
              objectFit="contain"
              height="auto"
            />
          )}
        </SpecialMobileBox>
      </>
    );
  }
}

export default SingleProductGallery;

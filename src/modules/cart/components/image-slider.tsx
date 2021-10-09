import React, { Component } from "react";
import VectorLeft from "../../../assets/VectorLeft.png";
import VectorRight from "../../../assets/VectorRight.png";
import {
  AbsoluteOneBox,
  CenterDiv,
  ProductImages,
  RelativeTwoBox,
  VectorsImage,
} from "../../../core/shared";

class ImageSlider extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      imageIndex: 0,
    };
  }
  previousImage(itemsLength: number) {
    if (this.state.imageIndex === 0) {
      this.setState({
        imageIndex: itemsLength - 1,
      });
    } else {
      this.setState({
        imageIndex: this.state.imageIndex - 1,
      });
    }
  }

  nextImage(itemsLength: number) {
    if (this.state.imageIndex < itemsLength - 1) {
      this.setState({
        imageIndex: this.state.imageIndex + 1,
      });
    } else {
      this.setState({
        imageIndex: 0,
      });
    }
  }
  render() {
    const { item } = this.props;

    return (
      <CenterDiv>
        <AbsoluteOneBox>
          <ProductImages
            src={item.image[this.state.imageIndex]}
            alt="Product"
          />
        </AbsoluteOneBox>
        <RelativeTwoBox>
          {item.image.length > 1 && (
            <>
              <VectorsImage
                src={VectorLeft}
                onClick={() => {
                  this.previousImage(item.image.length);
                }}
              />
              <VectorsImage
                src={VectorRight}
                onClick={() => this.nextImage(item.image.length)}
              />
            </>
          )}
        </RelativeTwoBox>
      </CenterDiv>
    );
  }
}

export default ImageSlider;

import React, { Component } from "react";
import { Typography } from "../../../core/shared";

interface CategoryHeadingProps {
  heading: string;
}

class CategoryHeading extends Component<CategoryHeadingProps> {
  render() {
    const { heading } = this.props;

    return (
      <Typography
        textTransform={"capitalize"}
        marginTop="40px"
        marginBottom="40px"
        marginLeft="12px"
        color="#1D1F22"
        fontStyle="normal"
        fontWeight="normal"
        fontSize="42px"
      >
        {heading}
      </Typography>
    );
  }
}

export default CategoryHeading;

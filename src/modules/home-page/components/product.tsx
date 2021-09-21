import React, { Component } from "react";
import ShoppingCart from "../../../assets/CircleIcon.png";
import {
  Box,
  BoxHover,
  Button,
  Card,
  CustomLink,
  Image,
  Typography,
} from "../../../core/shared";

interface ProductsProps {
  id?: string;
  inStock: boolean;
  image: string;
  name: string;
  price: string;
  category?: string;
  attributes?: any;
}

class Product extends Component<ProductsProps> {
  render() {
    return this.props.inStock ? (
      <CustomLink to={`/categories/${this.props.category}/${this.props.id}`}>
        <Card margin="0px 10px">
          <Image
            height="450px"
            objectFit="contain"
            src={this.props.image}
            alt="Product"
          />
          <Typography
            fontSize="18px"
            color="#1D1F22"
            fontWeight="300"
            marginTop="25px"
          >
            {this.props.name}
          </Typography>
          <Typography fontSize="18px" color="#1D1F22" fontWeight="500">
            {this.props.price}
          </Typography>

          <Typography
            marginTop="10px"
            marginBottom="10px"
            fontWeight="bold"
            fontSize="18px"
            textTransform="uppercase"
          >
            {this.props.attributes?.[1]?.name}
          </Typography>
          <Box>
            {this.props.attributes?.[1]?.items?.map(
              (swatch: any, index: number) => (
                <Button
                  bgColor={swatch.value}
                  cursor
                  key={index}
                  fontSize="12px"
                  fontWeight="normal"
                  color="#1D1F22"
                  border="1px solid #1D1F22"
                  padding="2px"
                  marginTop="5px"
                  marginRight="2px"
                  height="20px"
                >
                  {swatch.displayValue}
                </Button>
              )
            )}
          </Box>

          <BoxHover
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            position="absolute"
            right="0"
            top="0"
            bottom="0"
            height="100%"
            width="100%"
            padding="0% 5% 0% 0%"
            zIndex="3"
            opacity="0"
          >
            <Box padding="0 0 9% 0">
              <img src={ShoppingCart} alt="Cart" />
            </Box>
          </BoxHover>
        </Card>
      </CustomLink>
    ) : (
      <Card>
        <Image
          height="450px"
          width="100%"
          objectFit="contain"
          src={this.props.image}
          alt="Product"
        />
        <Typography
          fontSize="18px"
          color="#8D8F9A"
          fontWeight="300"
          marginTop="25px"
        >
          {this.props.name}
        </Typography>
        <Typography fontSize="18px" color="#8D8F9A" fontWeight="500">
          {this.props.price}
        </Typography>
        <Box
          display="flex"
          top="0"
          bottom="0"
          bgColor="rgba(255,255,255,0.5)"
          position="absolute"
          height="88%"
          width="100%"
          zIndex="3"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            textTransform="uppercase"
            fontSize="24px"
            fontWeight="normal"
            fontStyle="normal"
            color="#8D8F9A"
          >
            Out of stock
          </Typography>
        </Box>
      </Card>
    );
  }
}

export default Product;

import styled, { css } from "styled-components";

export const SpecialRightMarginBox = styled.div`
  margin-right: 15px;
  padding: 0px;
  @media (max-width: 600px) {
    padding: 0px;
    margin: 0px;
  }
`;

export const SpecialLeftMarginBox = styled.div`
  margin-left: 80px;
  padding: 0px;
  @media (max-width: 600px) {
    padding: 0px;
    margin: 0px;
  }
`;

export const SmallProductImage = styled.img`
  width: 100%;
  object-fit: contain;
  height: 120px;
  margin: 0px 0px 15px 0px;
  cursor: pointer;
`;

export const NormalProductImage = styled.img`
  width: 100%;
  object-fit: contain;
  height: auto;
  max-height: 800px;
`;

export const BrandTypography = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  color: #1d1f22;
`;

export const NameTypography = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 27px;
`;

export const AttributesNameTypography = styled.h1`
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  margin-top: 50px;
  margin-bottom: 10px;
`;

export const PriceTypography = styled.h1`
  font-weight: bold;
  font-size: 24px;
`;

export interface AddToCartButtonProps {
  disabled: boolean;
}
export const AddToCartButton = styled.button<AddToCartButtonProps>`
  cursor: pointer;
  border: none;
  margin: 20px 0px 25px 0px;
  padding: 16px 32px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  width: 295px;
  background-color: #5ece7b;
  color: white;
  ${(props) =>
    props.disabled &&
    css`
      background-color: #444242;
      color: white;
      cursor: not-allowed;
    `}
`;

export const SuccessMessageTypography = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: green;
  width: 290px;
`;

export const ErrorMessageTypography = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: red;
  width: 295px;
`;

export interface AttributesButtonProps {
  isActive?: boolean;
}
export const AttributesButton = styled.button<AttributesButtonProps>`
  font-size: 16px;
  font-weight: normal;
  background-color: white;
  color: #1d1f22;
  border: 1px solid #1d1f22;
  padding: 16px;
  margin-right: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    background-color: #000000;
    color: white;
  }
  ${(props) =>
    props.isActive &&
    css`
      background-color: #000000;
      color: white;
    `}
`;

export const AttributesNameText = styled.p`
  font-size: 16px;
  margin: 0px;
`;
export interface ColorButtonProps {
  bgColor: string;
  isActive?: boolean;
}
export const ColorButton = styled.button<ColorButtonProps>`
  font-size: 16px;
  font-weight: normal;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "")};
  color: #1d1f22;
  border: 1px solid #1d1f22;
  padding: 25px;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);
  }
  ${(props) =>
    props.isActive &&
    css`
      padding: 20px;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);
    `}
`;

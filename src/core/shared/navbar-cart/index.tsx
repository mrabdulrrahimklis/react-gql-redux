import styled, { css } from "styled-components";

export const FlexEndBox = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  z-index: 99;
  right: 0;
  margin-right: 70px;
  background-color: transparent;
  @media (max-width: 600px) {
    width: 100%;
    margin: 0px;
  }
`;

export const NavbarCartContainer = styled.div`
  background-color: rgba(57, 55, 72, 0.22);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 6;
  right: 0;
  top: 70;
  padding: 0 70px 0 0;
  @media (max-width: 600px) {
    width: 100%;
    padding: 0px;
    text-align: center;
  }
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const SimpleBlockBox = styled.div`
  display: block;
`;

export const CountBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 20px;
  justify-content: center;
  align-content: space-between;
  padding-right: 10px;
  @media (max-width: 600px) {
    padding-left: 7px;
    margin: 10px 0px;
  }
`;

export const ProductInfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 180px;
  justify-content: flex-start;
  align-content: space-between;
`;

export const BlockBox = styled.div`
  background-color: white;
  display: block;
  width: 400px;
  padding: 20px;
  max-height: 400px;
  overflow: auto;
`;

export const SimpleTypography = styled.p`
  font-size: 16px;
  margin: 0px;
`;

export const ProductBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
  @media (max-width: 600px) {
    display: block;
  }
`;

export const TextLeft = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  text-align: left;
`;

export const BoldTextLeft = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: left;
  margin-top: 10px;
`;

export const BoldTextCenter = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
`;

export const BoldTextRight = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  text-align: right;
`;

export const OverflowBox = styled.div`
  display: flex;
  overflow: auto;
  max-width: 200px;
  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
`;

export const PlusAndMinusButton = styled.button`
  font-size: 14px;
  font-weight: normal;
  background-color: white;
  color: #1d1f22;
  border: 1px solid #1d1f22;
  padding: 10px;
  cursor: pointer;
  width: 35px;
  &:hover {
    background-color: #000000;
    color: white;
  }
`;

export const ProductImage = styled.img`
  width: 130px;
  height: auto;
  object-fit: contain;
`;

export const ViewBagButton = styled.button`
  margin-top: 30px;
  background-color: #ffffff;
  color: #1d1f22;
  border: 1px solid black;
  padding: 16px 40px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
`;

export const CheckOutButton = styled.button`
  padding: 16px 40px;
  margin-top: 30px;
  background-color: #5ece7b;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid transparent;
`;

export interface SizesButtonProps {
  isActive?: boolean;
}

export const SizesButton = styled.button<SizesButtonProps>`
  font-size: 14px;
  font-weight: normal;
  background-color: rgba(0, 0, 0, 0.1);
  color: #a6a6a6;
  border: 1px solid #a6a6a6;
  padding: 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  margin-top: 5px;
  &:hover {
    background-color: #000000;
    color: white;
  }
  ${(props) =>
    props.isActive &&
    css`
      background-color: #1d1f22;
      border: 1px solid #1d1f22;
      color: white;
    `}
`;

export interface CartColorButtonProps {
  bgColor: string;
  isActive?: boolean;
}
export const CartColorButton = styled.button<CartColorButtonProps>`
  font-size: 16px;
  font-weight: normal;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "")};
  color: #1d1f22;
  border: 1px solid #1d1f22;
  padding: 15px;
  margin-right: 2px;
  margin-bottom: 2px;
  margin-top: 5px;
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

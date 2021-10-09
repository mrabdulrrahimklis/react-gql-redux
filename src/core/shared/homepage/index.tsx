import styled from "styled-components";

export const CategoryHeading = styled.h1`
  text-transform: capitalize;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 12px;
  color: #1d1f22;
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
`;

export const MainPadding = styled.div`
  padding: 0px 70px;
  @media (max-width: 600px) {
    padding: 0px 5px;
  }
`;

export const MainProductImage = styled.img`
  height: 450px;
  object-fit: contain;
  width: 100%;
  cursor: pointer;
`;

export const MainProductName = styled.h1`
  font-size: 18px;
  font-weight: 300;
  margin-top: 25px;
  color: #1d1f22;
`;

export const ProductPriceTypography = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: #1d1f22;
`;

export const OutOfStockText = styled.h1`
  font-size: 24px;
  font-weight: normal;
  text-transform: uppercase;
  color: #8d8f9a;
`;

export const OutOfStockBox = styled.div`
  display: flex;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  height: 100%;
  width: 98%;
  z-index: 3;
  justify-content: center;
  align-items: center;
`;

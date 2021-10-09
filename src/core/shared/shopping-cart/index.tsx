import styled from "styled-components";

export const CartText = styled.h1`
  margin-top: 50px;
  margin-bottom: 80px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 32px;
  color: #1d1f22;
  margin: 80px 0px;
`;

export const BorderTopBox = styled.div`
  border-top: 2px solid #e5e5e5;
  width: 90%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ProductImages = styled.img`
  width: 180px;
  height: auto;
  max-height: 220px;
  margin-left: 20px;
  object-fit: contain;
  @media (max-width: 600px) {
    max-height: 170px;
  }
`;

export const AbsoluteOneBox = styled.div`
  position: absolute;
  z-index: 1;
`;

export const RelativeTwoBox = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 180px;
`;

export const VectorsImage = styled.img`
  height: 10px;
  width: 10px;
  margin: 0px 10px;
`;

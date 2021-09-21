import styled from "styled-components";

export interface ProductsContainerProps {
  backgroundColor?: string;
  marginTop?: string;
  marginBottom?: string;
}

export const ProductsContainer = styled.div<ProductsContainerProps>`
  width: 100%;
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-gap: 60px 0px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#ffffff"};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "")};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "")};
  @media (max-width: 960px) {
    grid-template-columns: 50% 50%;
  }
  @media (max-width: 600px) {
    grid-template-columns: 100%;
  }
`;

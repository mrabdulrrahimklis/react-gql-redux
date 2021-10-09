import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-gap: 60px 0px;
  margin-top: 80px;
  margin-bottom: 80px;
  background-color: #ffffff;
  @media (max-width: 960px) {
    grid-template-columns: 50% 50%;
  }
  @media (max-width: 600px) {
    grid-template-columns: 100%;
  }
`;

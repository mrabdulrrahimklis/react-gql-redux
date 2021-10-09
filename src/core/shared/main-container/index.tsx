import styled from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  min-height: 100vh;
  @media (max-width: 600px) {
    padding: 0px 5px;
  }
`;

export const SingleProductContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 10% 45% 40%;
  grid-gap: 0px 40px;
  margin: 80px 0px;
  @media (max-width: 600px) {
    display: block;
  }
`;

export const SimpleText = styled.h1`
  font-weight: normal;
  font-size: 16px;
  font-style: normal;
  max-width: 295px;
  overflow: auto;
  max-height: 300px;
  color: #1d1f22;
  line-height: 26px;
`;

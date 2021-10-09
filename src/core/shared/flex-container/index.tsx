import styled from "styled-components";

export const FlexContainerNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 70px;
  @media (max-width: 600px) {
    padding: 0px 5px;
    text-align: center;
    display: block;
  }
`;

export const FlexCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarPaddingContainer = styled.div`
  padding: 0px 20px 0px 3px;
`;

export const NumberOfProductsContainer = styled.div`
  position: absolute;
  margin: -30px 0px 0px 13px;
`;

export const SpaceBetweenBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

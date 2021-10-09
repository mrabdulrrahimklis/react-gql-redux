import styled, { css } from "styled-components";

export const NavbarCurrenciesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 99;
  right: 0;
  top: 60;
  padding: 0 100px 0 0;
  @media (max-width: 600px) {
    width: 100%;
    padding: 0px;
    text-align: center;
  }
`;

export const FlexAndMarginBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: -10px 40px 0px 0px;
  width: 100%;
`;

export const BlockWhiteBox = styled.div`
  display: block;
  width: 120px;
  background-color: white;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  @media (max-width: 600px) {
    width: 100%;
    padding: 0px;
    text-align: center;
  }
`;

export interface ButtonProps {
  isActive: boolean;
}
export const CurrenciesButton = styled.button<ButtonProps>`
  width: 100%;
  background-color: white;
  padding: 10px 15px 10px 0;
  color: black;
  cursor: pointer;
  border: none;
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

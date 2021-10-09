import styled, { css } from "styled-components";

export interface NavbarHeadingProps {
  isActive?: boolean;
}

export const NavbarHeading = styled.h3<NavbarHeadingProps>`
  text-transform: uppercase;
  font-weight: 10;
  padding: 0px 15px 20px 15px;
  margin-bottom: 0;
  border-bottom: 3px solid transparent;
  color: #1d1f22;
  &:hover {
    color: #5ece7b;
    border-bottom: 3px solid #5ece7b;
  }
  ${(props) =>
    props.isActive &&
    css`
      color: #5ece7b;
      border-bottom: 3px solid #5ece7b;
    `}
`;

export const NumberOfItemsText = styled.p`
  font-weight: bold;
  font-size: 12px;
  font-style: normal;
  color: white;
  line-height: 20px;
  margin-top: 0px;
`;

export const NumberOfItemsBox = styled.div`
  border-radius: 50%;
  background-color: #1d1f22;
  color: white;
  height: 20px;
  width: 20px;
`;

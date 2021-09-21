import styled, { css } from "styled-components";

export interface NavbarHeadingProps {
  textTransform?: string;
  fontWeight?: string;
  isActive?: boolean;
}

export const NavbarHeading = styled.h3<NavbarHeadingProps>`
  text-transform: ${(props) =>
    props.textTransform ? props.textTransform : ""};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "")};
  padding: 0px 15px 20px 15px;
  margin-bottom: 0;
  border-bottom: 3px solid transparent;
  color: ${(props) => (props.color ? props.color : "#1D1F22")};
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

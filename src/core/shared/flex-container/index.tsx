import styled from "styled-components";

export interface FlexContainerProps {
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  width?: string;
  padding?: string;
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: ${(props) => (props.display ? props.display : "flex")};
  padding: ${(props) => (props.padding ? props.padding : "flex")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  width: ${(props) => (props.width ? props.width : "center")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  @media (max-width: 500px) {
    display: ${(props) => (props.display ? props.display : "block")};
    text-align: center;
  }
`;

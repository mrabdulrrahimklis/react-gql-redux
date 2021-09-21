import styled from "styled-components";

export interface FlexContainerProps {
  display?: string;
  alignItems?: string;
  justifyContent?: string;
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: ${(props) => (props.display ? props.display : "flex")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  @media (max-width: 500px) {
    display: ${(props) => (props.display ? props.display : "block")};
    text-align: center;
  }
`;

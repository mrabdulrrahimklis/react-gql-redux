import styled from "styled-components";

export interface CardProps {
  padding?: string;
  margin?: string;
  bgColor?: string;
  height?: string;
}

export const Card = styled.div<CardProps>`
  padding: ${(props) => (props.padding ? props.padding : "2%")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  height: ${(props) => (props.height ? props.height : "")};
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};
  position: relative;
  opacity: 1;
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    opacity: 1;
  }
`;

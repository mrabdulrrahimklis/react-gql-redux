import styled from "styled-components";

export interface BoxProps {
  display?: string;
  flexWrap?: string;
  flex?: string;
  gridTemplateColumns?: string;
  gridGap?: string;
  alignItems?: string;
  justifyContent?: string;
  width?: string;
  borderTop?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  boxShadow?: string;
  height?: string;
  minHeight?: string;
  zIndex?: string;
  position?: string;
  bgColor?: string;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  opacity?: string;
  maxHeight?: string;
  overflow?: string;
  maxWidth?: string;
}

export const Box = styled.div<BoxProps>`
  display: ${(props) => (props.display ? props.display : "")};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "")};
  flex: ${(props) => (props.flex ? props.flex : "")};
  grid-template-columns: ${(props) =>
    props.gridTemplateColumns ? props.gridTemplateColumns : ""};
  grid-gap: ${(props) => (props.gridGap ? props.gridGap : "")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : ""};
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};
  min-height: ${(props) => (props.minHeight ? props.minHeight : "")};
  z-index: ${(props) => (props.zIndex ? props.zIndex : "")};
  position: ${(props) => (props.position ? props.position : "")};
  border-top: ${(props) => (props.borderTop ? props.borderTop : "")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
  padding: ${(props) => (props.padding ? props.padding : "")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : "")};
  background-color: ${(props) => (props.bgColor ? props.bgColor : "")};
  top: ${(props) => (props.top ? props.top : "")};
  bottom: ${(props) => (props.bottom ? props.bottom : "")};
  right: ${(props) => (props.right ? props.right : "")};
  left: ${(props) => (props.left ? props.left : "")};
  opacity: ${(props) => (props.opacity ? props.opacity : "")};
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : "")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "")};
  overflow: ${(props) => (props.overflow ? props.overflow : "")};
`;

export const BoxHover = styled(Box)`
  &:hover {
    opacity: 1;
  }
`;

export const MobileBox = styled(Box)`
  @media (max-width: 600px) {
    width: 100%;
    padding: 0px;
    text-align: center;
  }
`;

export const SingleProductBox = styled(Box)`
  @media (max-width: 600px) {
    display: block;
  }
`;

export const SingleProductImages = styled(Box)`
  @media (max-width: 600px) {
    display: flex;
    overflow: auto;
    max-width: 300px;
    margin: 0px;
  }
`;

export const SpecialMobileBox = styled(Box)`
  @media (max-width: 600px) {
    padding: 0px;
    margin: 0px;
  }
`;

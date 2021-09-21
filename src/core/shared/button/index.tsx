import styled, { css } from "styled-components";

export interface ButtonProps {
  padding?: string;
  textAlign?: string;
  bgColor?: string;
  color?: string;
  textTransform?: string;
  lineHeight?: string;
  width?: string;
  height?: string;
  fontWeight?: string;
  fontSize?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  border?: string;
  borderRadius?: string;
  isActive?: boolean;
  isActiveSwatch?: boolean;
  disabled?: boolean;
  cursor?: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: ${(props) => (props.padding ? props.padding : "")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  background-color: ${(props) => (props.bgColor ? props.bgColor : "")};
  color: ${(props) => (props.color ? props.color : "white")};
  text-transform: ${(props) =>
    props.textTransform ? props.textTransform : ""};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "")};
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "")};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "")};
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
  cursor: ${(props) => (props.cursor ? "pointer" : "")};
  ${(props) =>
    props.disabled &&
    css`
      background-color: #444242;
      color: white;
      cursor: not-allowed;
    `}
`;

export const ButtonHover = styled(Button)`
  cursor: ${(props) => (props.cursor ? "pointer" : "")};
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
  ${(props) =>
    props.isActiveSwatch &&
    css`
      border: 2px solid red;
    `}
`;

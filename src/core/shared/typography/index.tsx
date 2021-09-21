import styled from "styled-components";

export interface TypographyProps {
  fontStyle?: string;
  fontWeight?: string;
  fontSize?: string;
  textAlign?: string;
  color?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  textTransform?: string;
  lineHeight?: string;
  width?: string;
}

export const Typography = styled.p<TypographyProps>`
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : "normal")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "")};
  color: ${(props) => (props.color ? props.color : "#1D1F22")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0px")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0px")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "5px"};
  text-transform: ${(props) =>
    props.textTransform ? props.textTransform : ""};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "")};
  width: ${(props) => (props.width ? props.width : "")};
`;

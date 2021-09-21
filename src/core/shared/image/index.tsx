import styled from "styled-components";

export interface ImageProps {
  height?: string;
  width?: string;
  objectFit?: string;
  margin?: string;
  cursorPointer?: boolean;
}

export const Image = styled.img<ImageProps>`
  height: ${(props) => (props.height ? props.height : "auto")};
  width: ${(props) => (props.width ? props.width : "100%")};
  object-fit: ${(props) => (props.objectFit ? props.objectFit : "cover")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  cursor: ${(props) => (props.cursorPointer ? "pointer" : "")};
`;

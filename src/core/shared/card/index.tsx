import styled from "styled-components";

export const CardImage = styled.div`
  position: absolute;
  right: 0;
  text-align: right;
  display: inline-block;
  margin-top: -100px;
  margin-right: 20px;
  opacity: 0;
  @media (max-width: 600px) {
    padding: 0px;
    margin: 0px;
  }
`;
export const Card = styled.div`
  padding: 2%;
  margin: 0px 10px;
  background-color: #ffffff;
  position: relative;
  opacity: 1;
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    opacity: 1;
    ${CardImage} {
      opacity: 1;
    }
  }
  @media (max-width: 600px) {
    padding: 0px;
    margin: 0px;
  }
`;

export const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  height: auto;
`;

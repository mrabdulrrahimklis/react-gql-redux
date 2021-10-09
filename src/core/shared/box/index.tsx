import styled from "styled-components";

export const SingleProductImages = styled.div`
  margin: 0px 20px 0px 0px;
  padding: 1%;
  max-height: 800px;
  overflow: auto;
  @media (max-width: 600px) {
    display: flex;
    overflow: auto;
    max-width: 300px;
    margin: 0px;
  }
`;

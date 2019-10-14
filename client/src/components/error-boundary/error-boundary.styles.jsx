import styled from "styled-components";

export const ErrorImageOverlay = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: 300px;
  background-position: center;
  background-repeat: no-repeat;
  width: 50vw;
  height: 50vh;

  @media screen and (max-width: 970px) {
    width: 100vw;
  }

  @media screen and (max-width: 420px) {
    background-size: 220px;
  }
`;

export const ErrorImageText = styled.div`
  font-size: 28px;
  color: black;

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

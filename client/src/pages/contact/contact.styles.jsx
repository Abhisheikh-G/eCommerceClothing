import styled from "styled-components";

export const ContactButtonContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 7vh auto 1vh;

  @media screen and (max-width: 500px) {
    width: 250px;
  }

  @media screen and (max-height: 615px) {
    margin-top: 10vh;
  }

  @media screen and (max-height: 420px) {
    margin-top: 13vh;
  }

  @media screen and (max-height: 340px) {
    margin-top: 15vh;
  }
`;

export const ContactContainer = styled.div`
  width: 800px;
  display: flex;
  justify-content: center;
  margin: auto;
  text-align: center;
  @media screen and (max-width: 920px) {
    width: auto;
    margin: 0 25%;
  }

  @media screen and (max-width: 600px) {
    margin: 0 15%;
  }

  @media screen and (max-width: 500px) {
    margin: 0 10%;
  }
`;

export const ContactHeader = styled.h1`
  height: 1vh;
  font-size: 38px;
  text-align: center;
  font-weight: 300;
  @media screen and (max-width: 500px) {
    font-size: 32px;
  }
`;

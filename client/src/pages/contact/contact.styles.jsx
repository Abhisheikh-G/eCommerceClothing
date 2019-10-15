import styled from "styled-components";

export const ContactButtonContainer = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  @media screen and (max-width: 920px) {
    width: 400px;
  }
`;

export const ContactContainer = styled.div`
  width: 800px;
  display: flex;
  justify-content: center;
  margin: auto;
  @media screen and (max-width: 920px) {
    display: block;
    width: auto;
    margin: 0 25%;
    text-align: center;
    justify-content: center;
  }

  @media screen and (max-width: 600px) {
    display: block;
    width: auto;
    margin: 0 15%;
    text-align: center;
    justify-content: center;
  }

  @media screen and (max-width: 500px) {
    display: block;
    width: auto;
    margin: 0 10%;
    text-align: center;
    justify-content: center;
  }
`;

export const ContactHeader = styled.h1`
  height: 10vh;
  font-size: 38px;
  text-align: center;
  font-weight: 300;
`;

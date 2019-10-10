import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
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
`;

import styled from "styled-components";

export const JoinUsContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    width: auto;
  }
`;

export const JoinUsTitle = styled.h2`
  margin: 10px 0;
`;

export const JoinUsForm = styled.form`
  margin: 5px;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 466px) {
    display: block;
  }
`;

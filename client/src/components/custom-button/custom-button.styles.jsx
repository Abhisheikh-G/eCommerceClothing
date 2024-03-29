import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  transition: all 0.4s ease-in;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid white;
  }
`;

const googleSignInStyle = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
  }
`;

const contactUsStyle = css`
  margin-top: 5px;
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyle;
  }

  if (props.isContact) {
    return contactUsStyle + buttonStyles;
  }

  return props.inverted ? invertedButtonStyle : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 14px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  ${getButtonStyles}
  @media screen and (max-width: 475px) {
    width: 100%;
  }
`;

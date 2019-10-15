import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormControl from "@material-ui/core/FormControl";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import {
  ContactUsContainer,
  ContactUsForm,
  ContactUsTitle
} from "./contact-us.styles";
import { ButtonsBarContainer } from "../join-us/join-us.styles";

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1),
    width: "100%"
  }
}));

const ContactUs = () => {
  const classes = useStyles();
  const [contactInformation, setContactInformation] = useState({
    contactMessage: "",
    email: ""
  });

  const { email, contactMessage } = contactInformation;

  const handleSubmit = event => {
    event.preventDefault();
    setContactInformation({
      email: "",
      contactMessage: ""
    });
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setContactInformation({ ...contactInformation, [name]: value });
  };
  return (
    <Fade timeout={1000} in>
      <ContactUsContainer>
        <ContactUsTitle>Send Us A Message</ContactUsTitle>
        <span>
          Write a brief message and include your email. We'll get back to you
          A.S.A.P
        </span>
        <ContactUsForm onSubmit={handleSubmit}>
          <FormControl className={classes.formControl}>
            <FormControl className={classes.formControl}>
              <TextField
                multiline
                rows="4"
                id="standard-multiline-flexible"
                label="Your message here.."
                name="contactMessage"
                value={contactMessage}
                type="email"
                onChange={handleChange}
                margin="normal"
              />
            </FormControl>
            <TextField
              label="Email"
              name="email"
              value={email}
              type="email"
              onChange={handleChange}
              margin="normal"
            />
          </FormControl>
          <ButtonsBarContainer>
            <CustomButton type="submit"> Contact Us </CustomButton>
          </ButtonsBarContainer>
        </ContactUsForm>
      </ContactUsContainer>
    </Fade>
  );
};

export default ContactUs;

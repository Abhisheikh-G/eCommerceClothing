import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import {
  JoinUsContainer,
  JoinUsTitle,
  JoinUsForm,
  ButtonsBarContainer
} from "./join-us.styles";

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1),
    width: "100%"
  }
}));

const JoinUs = () => {
  const classes = useStyles();
  const [applicantCredentials, setApplicantCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    position: ""
  });
  const { email, firstName, lastName, position } = applicantCredentials;
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setApplicantCredentials({
      firstName: "",
      lastName: "",
      email: "",
      position: ""
    });
  };

  const handleChange = event => {
    const { value, name } = event.target;
    console.log(value, name);
    setApplicantCredentials({ ...applicantCredentials, [name]: value });
    console.log(applicantCredentials);
  };
  return (
    <Fade timeout={1000} in>
      <JoinUsContainer>
        <JoinUsTitle>Join Our Team</JoinUsTitle>
        <span>Give us some details about yourself</span>
        <JoinUsForm onSubmit={handleSubmit}>
          <FormControl className={classes.formControl}>
            <TextField
              id="standard-uncontrolled"
              label="First Name"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              margin="normal"
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              label="Last Name"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              margin="normal"
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <TextField
              label="Email"
              name="email"
              value={email}
              type="email"
              onChange={handleChange}
              margin="normal"
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="position">Position</InputLabel>
            <Select
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={position}
              onChange={handleChange}
              inputProps={{
                name: "position"
              }}
            >
              <MenuItem value="Marketing">Marketing</MenuItem>
              <MenuItem value="Distribution">Distribution</MenuItem>
              <MenuItem value="Junior Developer">Junior Developer</MenuItem>
            </Select>
          </FormControl>
          <ButtonsBarContainer>
            <CustomButton type="submit"> Join Now </CustomButton>
          </ButtonsBarContainer>
        </JoinUsForm>
      </JoinUsContainer>
    </Fade>
  );
};

export default JoinUs;

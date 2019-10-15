import React, { useState } from "react";

import {
  ContactContainer,
  ContactHeader,
  ContactButtonContainer
} from "./contact.styles";
import JoinUs from "../../components/join-us/join-us.component";
import ContactUs from "../../components/contact-us/contact-us.component";
import CustomButton from "../../components/custom-button/custom-button.component";

const ContactPage = () => {
  const [showJoinUs, setShowJoinUs] = useState(false);
  const [showContactUs, setContactUs] = useState(false);

  const handleClickJoin = () => {
    setShowJoinUs(true);
    setContactUs(false);
  };

  const handleClickContact = () => {
    setShowJoinUs(false);
    setContactUs(true);
  };

  return (
    <div>
      <ContactHeader>Hi there, leave us a message.</ContactHeader>
      <ContactButtonContainer>
        <CustomButton onClick={handleClickJoin}> Join Our Team </CustomButton>
        <CustomButton onClick={handleClickContact}>
          Leave Us A Message
        </CustomButton>
      </ContactButtonContainer>

      <ContactContainer>
        {showJoinUs && <JoinUs />}
        {showContactUs && <ContactUs />}
      </ContactContainer>
    </div>
  );
};

export default ContactPage;

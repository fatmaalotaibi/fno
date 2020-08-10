import React, { useState } from "react";

//Styles
import { AuthButtonStyled } from "../../styles";

//modals
import SigninModal from "../modals/SigninModal";

const SigninButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <div>
      <AuthButtonStyled onClick={openModal}>Sign in</AuthButtonStyled>;
      <SigninModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default SigninButton;

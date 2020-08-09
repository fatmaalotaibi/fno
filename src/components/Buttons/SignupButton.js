import React, { useState } from "react";

//Styles
import { AuthButtonStyled } from "../../styles";

//Modales
import SignupModal from "../modals/SignupModal";

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div>
      <AuthButtonStyled onClick={openModal}>Sign up</AuthButtonStyled>
      <SignupModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default SignupButton;

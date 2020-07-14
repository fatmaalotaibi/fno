import React, { useState } from "react";

// Styling
import { UpdateButtonStyled } from "../../styles";

//components
import CoursesModal from "../modals/CoursesModal";

const UpdateButton = ({ course }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <CoursesModal
        isOpen={isOpen}
        closeModal={closeModal}
        oldCourse={course}
      />
    </>
  );
};

export default UpdateButton;

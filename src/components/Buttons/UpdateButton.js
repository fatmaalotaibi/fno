import React, { useState } from "react";

// Styling
import { UpdateButtonStyled } from "../../styles";

//components
import CoursesModal from "../modals/CoursesModal";
import InstituteModal from "../modals/InstituteModal";

const UpdateButton = ({ course, institute }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      {institute ? (
        <InstituteModal
          isOpen={isOpen}
          closeModal={closeModal}
          oldInstitute={institute}
        />
      ) : (
        <CoursesModal
          isOpen={isOpen}
          closeModal={closeModal}
          oldCourse={course}
        />
      )}
    </>
  );
};

export default UpdateButton;

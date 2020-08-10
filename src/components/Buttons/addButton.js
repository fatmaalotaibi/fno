import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";

//components
import CoursesModal from "../modals/CoursesModal";
import InstituteModal from "../modals/InstituteModal";

const AddButton = ({ instituteId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      {instituteId ? (
        <CoursesModal
          instituteId={instituteId}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      ) : (
        <InstituteModal isOpen={isOpen} closeModal={closeModal} />
      )}
    </div>
  );
};

export default AddButton;

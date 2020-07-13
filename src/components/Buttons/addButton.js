import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";

//components
import CoursesModal from "../modals/CoursesModal";

const AddButton = ({ createCourse }) => {
  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      <CoursesModal
        isOpen={isOpen}
        closeModal={closeModal}
        createCourse={createCourse}
      />
      ;
    </div>
  );
};

export default AddButton;

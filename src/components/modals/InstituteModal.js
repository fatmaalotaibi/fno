import React, { useState } from "react";
import Modal from "react-modal";

//stores
import instituteStore from "../../Stores/instituteStore";

//Style
import { CreateButtonStyled } from "../../styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const InstituteModal = ({ isOpen, closeModal, oldInstitute }) => {
  const [institute, setInstitute] = useState(
    oldInstitute ?? {
      name: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setInstitute({ ...institute, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setInstitute({ ...institute, image: event.target.files[0] });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    instituteStore[oldInstitute ? "updateInstitute" : "createInstitute"](
      institute
    );
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Institute Modal"
    >
      <h3>New Institute</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            required
            type="text"
            name="name"
            className="form-control"
            onChange={handleChange}
            value={institute.name}
          />
        </div>

        <div className="form-group">
          <label>Image</label>
          <input
            required
            type="file"
            className="form-control"
            name="image"
            onChange={handleChange}
          />
        </div>
        <CreateButtonStyled className="btn float-right">
          {oldInstitute ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default InstituteModal;

import React, { useState } from "react";
import Modal from "react-modal";

//stores
import courseStore from "../../Stores/courseStore";

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

const CoursesModal = ({ institute, isOpen, closeModal, oldCourse }) => {
  const [course, setCourse] = useState(
    oldCourse ?? {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setCourse({ ...course, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setCourse({ ...course, image: event.target.files[0] });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    courseStore[oldCourse ? "updateCourse" : "createCourse"](course, institute);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Courses Modal"
    >
      <h3>New Course</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6" name="name">
            <label>Name</label>
            <input
              required
              type="text"
              name="name"
              className="form-control"
              onChange={handleChange}
              value={course.name}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              required
              type="number"
              min="35"
              className="form-control"
              name="price"
              onChange={handleChange}
              value={course.price}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            required
            type="text"
            className="form-control"
            name="description"
            onChange={handleChange}
            value={course.description}
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
        <CreateButtonStyled className="btn float-right" type="submit">
          {oldCourse ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default CoursesModal;

import React from "react";
//styles
import styles from "../styles";

const CoursItem = (props) => {
  return (
    <div style={styles.cours}>
      <img
        src={props.cours.image}
        alt={props.cours.name}
        style={styles.coursImage}
      />
      <p style={styles.text}>{props.cours.name}</p>
      <p style={styles.text}>{props.cours.price} KD</p>
    </div>
  );
};

export default CoursItem;

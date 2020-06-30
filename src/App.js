import React from "react";

//Data
import cours from "./courses";

//styles
import styles from "./styles";

function App() {
  console.log(cours[0].name);

  const coursList = cours.map((cours) => (
    <div style={styles.cours} key={cours.id}>
      <img src={cours.image} alt={cours.name} style={styles.coursImage} />
      <p style={styles.text}>{cours.name}</p>
      <p style={styles.text}>{cours.price} KD</p>
    </div>
  ));

  return (
    <div>
      <div>
        <h1 style={styles.text}> Secret Art Courses</h1>
        <h4 style={styles.text}> Memory In Another way </h4>
        <img
          src="https://rlv.zcache.com/dancing_ballerina_pencil_drawing_postcard-r4f04d1ab983143c789ac1ec8acd63a38_vgbaq_8byvr_704.jpg"
          alt="ballerina1"
          style={styles.ballerinaImage}
        />
      </div>
      <div style={styles.list}>{coursList}</div>
    </div>
  );
}
export default App;

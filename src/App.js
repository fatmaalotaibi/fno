import React from "react";
const styles = {
  text: {
    textAlign: "center",
  },
  brallerinaImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
  coursImage: {
    width: "200px",
    height: "200px",
  },
  list: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  productsImage: {
    margin: "20px",
  },
};

function App() {
  return (
    <div>
      <div>
        <h1 style={styles.text}> Secret Art </h1>
        <h3 style={styles.text}> Memory In Another way </h3>
        <img
          src="https://rlv.zcache.com/dancing_ballerina_pencil_drawing_postcard-r4f04d1ab983143c789ac1ec8acd63a38_vgbaq_8byvr_704.jpg"
          alt="ballerina1"
          style={styles.brallerinaImage}
        />
      </div>
      <div style={styles.list}>
        <div style={styles.productsImage}>
          <img
            src="https://i.pinimg.com/236x/84/ec/6d/84ec6da0f5e165b5bf7bf8ae21a4c4b9--ballerina-drawing-ballerina-tattoo.jpg"
            alt="water color"
            style={styles.coursImage}
          />
          <p> water color cours</p>
          <p>5 days</p>
          <p>95 kd</p>
        </div>
        <div style={styles.productsImage}>
          <img
            src="https://cf.shopee.ph/file/265c419549ac2855d05e22c3d8f71885"
            alt="oil pastel painting"
            style={styles.coursImage}
          />
          <p>oil pastel painting cours</p>
          <p>5 days</p>
          <p>100 kd</p>
        </div>
        <div style={styles.productsImage}>
          <img
            src="https://paintdrawblend.com/wp-content/uploads/2018/04/IMG_7348-1024x1024.jpg"
            alt="panpastel painting"
            style={styles.coursImage}
          />
          <p>oil pastel painting cours</p>
          <p>5 days</p>
          <p>120 kd</p>
        </div>
      </div>
    </div>
  );
}

export default App;

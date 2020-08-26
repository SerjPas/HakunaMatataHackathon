import React from "react";
import styles from "../css/MainPage.module.css";
import { sendWeatherData } from "../lib/api";

const MainPage = () => {
  const onSubmit = () => {
    console.log("Send to all");
    sendWeatherData();
  };
  return (
    <div className={styles.Body}>
      <h1 className={styles.H1}>
        We're helping farmers in developing countries by providing accurate
        weather prediction forecasts and solutions for efficient energy and
        water consumption based on complex data models.
      </h1>
      <div className={styles.Div} >
        <button className={styles.Button} onClick={onSubmit}>Send To All</button>
      </div>
    </div>
  );
};

export default MainPage;

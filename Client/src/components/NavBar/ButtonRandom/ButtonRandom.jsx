import React, { useState } from "react";
import styles from "./ButtonRandom.module.css";

const ButtonRandom = ({ onSearch }) => {
  //const [randomNumber, setRandomNumber] = useState(0);

  const handleClick = () => {
    const newRandomNumber = Math.floor(Math.random() * 820);
    onSearch(newRandomNumber);
  };

  return (
    <div>
      <button onClick={handleClick} className={styles.button}>
        Random
      </button>
      
    </div>
  );
};

export default ButtonRandom;
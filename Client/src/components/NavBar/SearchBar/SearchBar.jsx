import styles from "./SearchBar.module.css";
import { useState } from "react";
import add from "../../../assets/images/add-square-svgrepo-com.svg";

export default function SearchBar({ onSearch }) {
  
  const [id, setId] = useState([]);

  const handleChange = (event) => {
    setId(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className={styles.containerSearch}>
      <input
        value={id}
        className={styles.search}
        onChange={handleChange}
        type="search"
        placeholder="Wubba lubba dub dub ? Put a number"
      />
      <button
        onClick={() => {
          debugger
          onSearch(id);
          
        }}
        className={styles.button}
      >
        <img className={styles.imgButton} src={add} />
      </button>
    </div>
  );
}

import React from "react";
import SearchBar from "./SearchBar";
import ButtonRandom from "./ButtonRandom";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/Rick_and_Morty.svg.png";

const Nav = ({ onSearch }) => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navbarLeft}>
      
        <Link to="/home">
          <button className={styles.button}>Home</button>
        </Link>

        <Link to="/favorites">
          <button className={styles.button}>Favorites</button>
        </Link>

        <Link to="/about">
          <button className={styles.button}>About</button>
        </Link>

        <img className={styles.navLogo} src={logo} alt="logo" />
      </div>
      <div className={styles.navbarRight}>
        <ButtonRandom onSearch={onSearch} />
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
};

export default Nav;

import styles from "../components/Login.module.css";
import imgLogin from "../assets/images/mrmessenks.png";
import { useState } from "react";
import validate from "../utils/validation.js";



const Form = ({ loginUser }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setErrors(validate({ ...userData, [property]: value }));
    setUserData({ ...userData, [property]: value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    loginUser(userData);
  }
  return (
    <form>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <img src={imgLogin} alt="mr.meeseeks" />
          <div className={styles.emailContent}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              value={userData.email}
              onChange={handleChange}
              className={errors.email ? styles.error : styles.success}
            />
            <span>{errors.email}</span>
          </div>
          <div className={styles.passwordContent}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={userData.password}
              onChange={handleChange}
              className={errors.password ? styles.error : styles.success}
            />
            <span>{errors.password}</span>
          </div>
          <button
            className={styles.button}
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;

import styles from "./AboutMe.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "../Carousel";
import iconFace from "../../assets/images/facebook.png";
import iconGit from "../../assets/images/github.png";
import iconLin from "../../assets/images/linkedin.png";

const AboutMe = () => {
  const LINK_FACEBOOK = "https://www.facebook.com/dioselyn.delvalle/";
  const LINK_LINKEDIN = "https://www.linkedin.com/in/dioselynlemus/";
  const LINK_GITHUB = "https://github.com/DimeDiose18";

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.one}>
        <Carousel />
      </div>

      <div className={styles.two}>
        <div className={styles.infoPersonal}>
          <h1 className={styles.name}>Hi!</h1>
          <h2 className={styles.info}>
            Welcome to this planet, my name is Dioselyn!
          </h2>
          <p className={styles.info}>
            And I have created this project based on what I have learned in
            SoyHenry.
          </p>
          <p className={styles.info}>
            Here below you will find my social networks.
          </p>
        </div>
      </div>

      <div className={styles.three}>
        <div className={styles.icons}>
          <a href={LINK_FACEBOOK} target="_blank">
            <img src={iconFace} className={styles.icon} alt="icono-facebook" />
          </a>
          <a href={LINK_GITHUB} target="_blank">
            <img src={iconGit} className={styles.icon} alt="icono-github" />
          </a>
          <a href={LINK_LINKEDIN} target="_blank">
            <img src={iconLin} className={styles.icon} alt="icono-linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

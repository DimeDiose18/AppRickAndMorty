import styles from "./DetailId.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import img2 from "../../assets/images/9829215db6f9210c0ae4e318e854cb1f.png"

const DetailId = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    if (!character?.length) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({ data }) => {
          if (data.id) {
            console.log(data.id);
            setCharacter(data);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        }
      );
    }

    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.containerDetail}>
      <div className={styles.containerDetailID}>
        <h1 className={styles.name}>{character?.name}</h1>
        <div className={styles.info}>
          <p><span>STATUS:</span> {character?.status}</p>
          <p><span>SPECIES:</span> {character?.species}</p>
          <p><span>GENDER:</span> {character?.gender}</p>
          <p><span>ORIGIN:</span> {character?.origin?.name}</p>
        </div>
      </div>
      
      <div className={styles.containerImg}>
      <img src={img2} alt="fondo" className={styles.img2}/>
      <img
          src={character?.image}
          alt={character.name}
          className={styles.img}
        />
      </div>
      
    </div>
  );
};

export default DetailId;

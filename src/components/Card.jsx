import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addFav, removeFav } from "../redux/actions";

export default function Card({ character, onClose }) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  console.log(character)
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === character?.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    console.log(character, isFav);
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(character?.id));
    } else {
      setIsFav(true);
      dispatch(addFav(character));
    }
  };

  const onCloseFavorite = () => {
    dispatch(removeFav(character?.id));
  };

  return (
    <div className={styles.card} key={character?.id}>
      <div className={styles.image}>
        <Link to={`/detail/${character?.id}`}>
          <img src={character?.image} alt={character?.name} />
        </Link>
      </div>

      <div className={styles.info}>
        <button
          className={styles.cardButton}
          onClick={() => {
            onClose(character?.id);
            onCloseFavorite();
          }}
        >
          X
        </button>

        {isFav ? (
          <button onClick={handleFavorite} className={styles.buttonFav}>
            ❤️
          </button>
        ) : (
          <button onClick={handleFavorite} className={styles.buttonFav}>
            🤍
          </button>
        )}

        <h2 className={styles.name}>{character?.name}</h2>

        <p>Status: {character?.status}</p>
        <p>Specie: {character?.species}</p>
        <p>Gender: {character?.gender}</p>
      </div>
    </div>
  );
}

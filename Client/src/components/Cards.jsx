import Card from "./Card";
import styles from "./Cards.module.css"

export default function Cards({ character, onClose }) {

  console.log(character);
  return (
    <div className={styles.container}>
      {character?.map((e) => {
        console.log(e)
        return (
          <div key={e.id}>
            <Card character={e} onClose={onClose} />
          </div>
        );
      })}
    </div>
  );
}

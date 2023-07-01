import { useSelector } from "react-redux";
import Card from "../components/Card";

const Favorites = ({ onClose }) => {
  const myFavorites = useSelector((state) => state.myFavorites);
  console.log(myFavorites);
  return (
    <div>
      {myFavorites.map((e) => {
        return (
          <div key={e}>
            <Card character={e} onClose={onClose}/>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;

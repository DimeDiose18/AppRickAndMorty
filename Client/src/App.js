import "./App.css";
import Nav from "./components/NavBar/Nav.jsx";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Cards from "./components/Cards";
import About from "./views/About.jsx";
import Detail from "./views/Detail.jsx";
import Form from "./views/Form.jsx";
import Favorites from "./views/Favorites";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const navigate = useNavigate();
  const EMAIL = "dimediose@example.com";
  const PASSWORD = "diose123";

  function loginUser(userData) {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = (id) => {
    try {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
          debugger;
          if (data.id) {
            
            const filterChar = characters?.map((e) => {
              if (e.id === data.id) return e;
            });

            const filteredChar = filterChar.filter((e)=> e !== undefined)
            if (filteredChar?.length) {
              window.alert("¡Ya hay un personaje con ese ID!");
            } else {
              setCharacters((oldChars) => [...oldChars, data]);
            }
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        })
        .catch((err) => {
          window.alert("¡No hay personajes con este ID!");
          console.error(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const onClose = (id) => {
    setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
  };

  const location = useLocation();

  const showNav = () => {
    return location.pathname !== "/";
  };

  return (
    <div className="App">
      {showNav() && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form loginUser={loginUser} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/favorites"
          element={<Favorites onClose={onClose}/>}
        />
        <Route
          path="/home"
          element={<Cards character={characters} onClose={onClose} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

import "@fontsource/abril-fatface";

import HOME from "./views/HOME/HOME";
import MisTurnos from "./views/MISTURNOS/MisTurnos";
import NavBar from "./components/NavBar/NavBar";
import Login from "./views/LOGIN/Login";
import Register from "./views/REGISTER/Register";
import style from "./App.module.css";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./views/ABOUT/About";
import Nofound from "./views/NOFOUND/NoFound";
import { UserContex } from "./CONTEXT/UserList";
import { useContext } from "react";
import CrearTurno from "./views/CREARTURNOS/CrearTurno";

function App() {
  const userGlobal = useContext(UserContex);
  const { userG } = userGlobal;
  return (
    <div className="vistaPpal">
      <div>
        <NavBar />
      </div>
      <div className={style.container}>
        <Routes>
          <Route path="/" element={<HOME />} />
          <Route path="/About" element={<About />} />
          {!userG.login ? (
            <>
              <Route path="/Register" element={<Register />} />
              <Route path="/Login" element={<Login />} />
            </>
          ) : (
            <>
              <Route path="/Register" element={<Navigate to="/MisTurnos" />} />
              <Route path="/Login" element={<Navigate to="/MisTurnos" />} />
            </>
          )}
          {userG.login ? (
            <>
              <Route path="/MisTurnos" element={<MisTurnos />} />
              <Route path="/CrearTurno" element={<CrearTurno />} />
            </>
          ) : (
            <Route path="/MisTurnos" element={<Navigate to="/Login" />} />
          )}
          <Route path="*" element={<Nofound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

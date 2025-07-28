import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonNav from "./ButtonNav/ButtonNav";
import styles from "./NavBar.module.css";
import {
  faHome,
  faToolbox,
  faTools,
  faUser,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { UserContex } from "../../CONTEXT/UserList";
import { useContext } from "react";

const NavBar = () => {
  const { userG } = useContext(UserContex);

  return (
    <div>
      <nav>
        <ul className={styles.list}>
          <ButtonNav
            name="HOME"
            url="/"
            icon={<FontAwesomeIcon icon={faHome} />}
          />
          <ButtonNav
            name="ABOUT   "
            url="/About"
            icon={<FontAwesomeIcon icon={faTools} />}
          />
          {!userG.login ? (
            <>
              <ButtonNav
                name="LOGIN   "
                url="/Login"
                icon={<FontAwesomeIcon icon={faUser} />}
              />
              <ButtonNav
                name="REGISTER"
                url="/Register"
                icon={<FontAwesomeIcon icon={faAddressCard} />}
              />
            </>
          ) : null}

          {userG.login ? (
            <ButtonNav
              name="Mis Turnos"
              url="/MisTurnos"
              icon={<FontAwesomeIcon icon={faToolbox} />}
            />
          ) : null}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

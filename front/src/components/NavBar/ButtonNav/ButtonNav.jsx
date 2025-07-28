import { Link } from "react-router-dom";
import style from "./ButtonNav.module.css";
import PropTypes from "prop-types";

const ButtonNav = ({ name, url, icon }) => {
  return (
    <li>
      <Link to={url} className={style.itemNav}>
        <div>{icon}</div> <div>{name}</div>
      </Link>
    </li>
  );
};

ButtonNav.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  icon: PropTypes.element,
};

export default ButtonNav;

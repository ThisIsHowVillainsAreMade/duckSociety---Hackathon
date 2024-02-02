import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/BurgerMenu.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu-container">
      <div className="burger-icon" onClick={toggleMenu}>
        <div className="bar-burger"></div>
        <div className="bar-burger"></div>
        <div className="bar-burger"></div>
      </div>

      <div className={`menu-burger ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/tuto-feu" onClick={toggleMenu}>
              Tuto Feu
            </Link>
          </li>
          <li>
            <Link to="/mallhalla" onClick={toggleMenu}>
              Mallhalla
            </Link>
          </li>
          <li>
            <Link to="/balance-ta-sorciere" onClick={toggleMenu}>
              Balance Ta Sorcière
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;

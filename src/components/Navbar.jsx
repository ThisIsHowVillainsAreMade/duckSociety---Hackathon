import { useState } from "react";
import PropTypes from "prop-types";
import DuckCard from "./DuckCard";
import "./styles/Navbar.css";
import HamburgerIcon from "../assets/home/icon-hamburger.svg"


function Navbar({toggleModalTeam, handleSelectMain}) {

  const [burgerClicked,setBurgerClicked] = useState(false)

  const handleBurgerClick = () => {
      setBurgerClicked(!burgerClicked)
  }

  const handleMenuItem = (item) => {
    handleSelectMain(item);
  };


  return (
    <nav>
      <h2 id="logo">DuckSociety</h2>
      <ul>
        <li id="menu" onClick={() => handleMenuItem("Accueil")}>Accueil</li>
        <li id="notice" onClick={() => handleMenuItem("Notice")}>Notice</li>
        <li id="about" onClick={toggleModalTeam} >A propos</li>
      </ul>
      <img src={HamburgerIcon} alt="HamburgerIcon" id="HamburgerIcon" onClick={handleBurgerClick} />
      <div id="burgerContainer" className={burgerClicked ? "on" : ""}>
        <ul>
          <li onClick={() => handleMenuItem("Accueil")}>Accueil</li>
          <li onClick={() => handleMenuItem("Notice")}>Notice</li>
          <li onClick={toggleModalTeam} >A propos</li>
        </ul>
      </div>
      <DuckCard/>
    </nav>
  )
}

Navbar.propTypes = {
  toggleModalTeam: PropTypes.any,
  handleSelectMain: PropTypes.any,
};

export default Navbar;

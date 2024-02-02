import DuckCard from "./DuckCard";
import "./styles/Navbar.css";


function Navbar({toggleModalTeam}) {
  return (
    <nav>
      <h2 id="logo">DuckSociety</h2>
      <ul>
        <li id="menu">Menu</li>
        <li id="notice">Notice</li>
        <li id="about" onClick={toggleModalTeam} >A propos</li>
      </ul>
      <DuckCard/>
    </nav>
  )
}
export default Navbar;

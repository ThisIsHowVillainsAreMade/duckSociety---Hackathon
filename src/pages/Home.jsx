import "./styles/Home.css";
import { useState } from "react";
import Navbar from "../components/Navbar";
import DuckCard from "../components/DuckCard";

function Home() {

  const [modalTeam, setModalTeam] = useState(false)

  const toggleModalTeam = () => {
      setModalTeam(!modalTeam)
  }

  return(
    <div id="homeContainer">
      <DuckCard modalTeam={modalTeam} toggleModalTeam={toggleModalTeam} />
      <Navbar toggleModalTeam={toggleModalTeam} />
    </div>
  )
}
export default Home;

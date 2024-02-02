import "./styles/Home.css";
import { useState } from "react";
import Navbar from "../components/Navbar";
import DuckCard from "../components/DuckCard";
import HomeCard from "../components/HomeCard";
import AnimationHome from "../components/AnimationHome";

function Home() {

  const [modalTeam, setModalTeam] = useState(false)

  const toggleModalTeam = () => {
      setModalTeam(!modalTeam)
  }

  return(
    <div id="homeContainer">
      <AnimationHome/>
      <DuckCard modalTeam={modalTeam} toggleModalTeam={toggleModalTeam} />
      <Navbar toggleModalTeam={toggleModalTeam} />
      <main id="mainHome">
        <div id="homeTitle">
          <h1>DUCK SOCIETY</h1>
          <h2>Apportez le futur au passé</h2>
        </div>
        <HomeCard/>
      </main>
      <footer>La Duck Society n’est en aucun cas responsable de vos actes éthique et morale</footer>
    </div>
  )
}
export default Home;

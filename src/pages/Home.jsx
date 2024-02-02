/* eslint-disable react/no-unescaped-entities */
import "./styles/Home.css";
import { useState } from "react";
import Navbar from "../components/Navbar";
import DuckCard from "../components/DuckCard";
import HomeCard from "../components/HomeCard";
import AnimationHome from "../components/AnimationHome";

function Home() {

  const [modalTeam, setModalTeam] = useState(false)
  const [main, setMain] = useState("Accueil")

  const handleSelectMain = (main) => {
    setMain(main);
  };

  const toggleModalTeam = () => {
      setModalTeam(!modalTeam)
  }

  return(
    <div id="homeContainer">
      <AnimationHome/>
      <DuckCard modalTeam={modalTeam} toggleModalTeam={toggleModalTeam} />
      <Navbar toggleModalTeam={toggleModalTeam} handleSelectMain={handleSelectMain}/>
      <main id="mainHome">
        {main === "Accueil" &&
        <>
        <div id="homeTitle">
          <h1>DUCK SOCIETY</h1>
          <h2>Apportez le futur au passé</h2>
        </div>
        <HomeCard/>
        </>
  }
        {main === "Notice" &&
          <div id="speechHome">
            <h2>Société DuckSociety: Voyages et Transferts Temporels</h2>
            <h3>Description:</h3>
            <p>DuckSociety est une entreprise révolutionnaire spécialisée dans le voyage dans le temps. Nous fournissons des services uniques permettant de transporter des technologies d'époques plus avancées vers le passé. Notre mission est de permettre un échange enrichissant entre différentes époques, en offrant l'opportunité de partager des avancées technologiques avec des civilisations antérieures.</p>
            <h3>Nos Services:</h3>
            <p><b>Transfert Temporel de Technologies:</b> DuckSociety offre un service de transport sécurisé pour acheminer des technologies modernes ou futuristes vers le passé.</p>
            <p><b>Conseils en Chrono-éthique:</b> Nos experts en éthique temporelle fournissent des consultations pour assurer un transfert responsable des technologies.</p>
            <p><b>Formation en Manipulation Temporelle:</b> Des cours spécialisés pour ceux qui souhaitent apprendre les rudiments du voyage dans le temps et de l'interaction avec le passé. Formations à partir de 7500€ par personne, éligible sous conditions au CPF et aides diverses.</p>
            <h3>Mentions Légales:</h3>
            <p><b>Responsabilité Limitée:</b> DuckSociety ne se porte pas garante des conséquences potentielles sur le cours de l'histoire dues à l'achat ou à la vente de technologies via nos services. Les clients assument l'entière responsabilité des effets de leurs actions sur la trame temporelle.</p>
            <p><b>Respect des Lois Temporelles:</b> Toutes les opérations sont menées dans le strict respect des lois et régulations en vigueur concernant les voyages dans le temps.</p>
            <p><b>Confidentialité et Sécurité:</b> Nous garantissons la confidentialité absolue de nos clients et la sécurité de toutes les transactions temporelles.</p>
            <h3>Avertissement:</h3>
            <p>Les clients sont tenus de respecter les directives de DuckSociety en matière de non-ingérence dans les événements historiques majeurs. Tout manquement à ces directives peut entraîner des sanctions sévères, y compris l'exclusion permanente de nos services.</p>
            <p><b>Contactez-nous pour une consultation gratuite et découvrez comment vous pouvez faire partie de l'histoire!</b></p>          
          </div>
        }
      </main>
      <footer>La Duck Society n’est en aucun cas responsable de vos actes éthique et morale</footer>
    </div>
  )
}
export default Home;

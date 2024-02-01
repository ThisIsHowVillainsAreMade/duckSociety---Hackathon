/* eslint-disable react/no-unescaped-entities */
import "./styles/Witch.css";
import Header from "../components/Header";
import Form from "../components/Form";
import SplineWitch from "../components/SplineWitch";

function Witch() {
  return (
    <>
      <Header headerId="witch-header" headerTitle="BALANCE TA SORCIERE" />
      <h2 className="witchDescription">
        Voisine peu délicate, mégère aux multiples chats? Si vous avez un doute
        sur quelqu’un , contactez nous !{" "}
      </h2>
      <p className="sponsor"> Sponsorisé par l'Inquisition</p>
      <section className="formAndWitch">
        <Form />
        <SplineWitch />
      </section>
    </>
  );
}
export default Witch;

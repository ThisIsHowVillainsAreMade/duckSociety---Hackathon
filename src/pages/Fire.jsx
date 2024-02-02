import "./styles/Fire.css";
import TutorialSteps from "../components/TutorialSteps";
import Header from "../components/Header";
import BurgerMenu from "../components/BurgerMenu";

function Fire() {
  return (
    <div className="fire">
      <BurgerMenu />
      <Header headerId="fire-header" headerTitle="Comment faire feu ?" />
      <TutorialSteps />
    </div>
  );
}
export default Fire;

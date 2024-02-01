import "./styles/Fire.css";
import TutorialSteps from "../components/TutorialSteps";
import Header from "../components/Header";

function Fire() {
  return (
    <div className="fire">
      <Header headerId="fire-header" headerTitle="Comment faire feu ?" />
      <TutorialSteps />
    </div>
  );
}
export default Fire;

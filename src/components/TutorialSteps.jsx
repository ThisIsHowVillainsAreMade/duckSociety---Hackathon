import { useState } from "react";
import stepsData from "../../datafire.json";
import "./styles/TutorialSteps.css";

const TutorialSteps = () => {
  const [currentStep, setCurrentStep] = useState(0); //  Etape actuelle du tutoriel, débutant à 0

  const nextStep = () => {
    // Ca nous permet de passer à l'étape suivante, incrémentant currentStep
    if (currentStep < stepsData.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    // Fonction pour revenir à l'étape précédente, décrémentant currentStep si ce n'est pas la première étape.

    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <main className="fire-main">
      <h1 className="fire-main-title">
        Perdu au milieu de nulle part ? il fait nuit, vous avez froid, notre
        tuto est là pour vous !
      </h1>
      <section className="Fire-step-Container">
        <div className="fire-image-container">
          <img
            className="fire-image"
            src={stepsData[currentStep].image}
            alt={`Étape ${currentStep + 1}`}
          />
          <div className="fire-details-container">
            <h2 className="fire-title">{stepsData[currentStep].title}</h2>
            <p className="fire-description">
              {stepsData[currentStep].description}
            </p>
            <div className="fire-navigation">
              {currentStep > 0 && (
                <button type="button" className="fire-prev" onClick={prevStep}>
                  Précédent
                </button>
              )}
              {currentStep < stepsData.length - 1 && (
                <button type="button" className="fire-next" onClick={nextStep}>
                  Suivant
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TutorialSteps;

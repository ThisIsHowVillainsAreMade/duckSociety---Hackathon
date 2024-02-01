import "./styles/Form.css";

function Form() {
  // const alert = () => {
  //   alert("issou");
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.target.checkValidity()) {
      const firstname = event.target.firstName.value;
      const lastname = event.target.lastName.value;
      const witchFirstname = event.target.witchFirstName.value;
      const witchLastname = event.target.witchLastName.value;
      const witchCity = event.target.witchCity.value;
      alert(`Oyé Oyé , ${firstname} ${lastname} ! Merci de nous avoir soumis votre formulaire. Nous faisons confiance à nos chers villageois. L'inquisition viendra arrêter ${witchFirstname} ${witchLastname} à ${witchCity} et son exécution aura lieu dans les 48H. Sauf si elle est rousse, celle-ci sera exécutée dans les 12H. Si elle est chauve: 6H, car il s'agit potentiellement d'une rousse qui se cache et les chauves maîtrisent une magie datant de l'aube de l'humanité.
      Nous ne vérifierons pas vos arguments car nous croyons pleinement en vous et vos témoignages.
      Nous vous confirmons que l'inquisition vous fournira des places VIP pour l'éxécution de ${witchFirstname} ${witchLastname}.`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="witchForm"
      // method="POST"
    >
      <section className="formSection">
        <div className="container1">
          {/* INFORMATIONS PERSONNELLES */}
          <div className="informations">
            <h2>A PROPOS DE VOUS</h2>
            <label htmlFor="firstName">
              <input
                className="formInput"
                type="text"
                id="firstName"
                name="firstName"
                required
                minLength={3}
                maxLength={25}
                placeholder="Votre Prénom"
              />
            </label>
            <label htmlFor="lastName">
              <input
                className="formInput"
                type="text"
                id="lastName"
                name="lastName"
                required
                minLength={3}
                maxLength={25}
                placeholder="Votre Nom de famille"
              />
            </label>
            <label htmlFor="city">
              <input
                className="formInput"
                type="text"
                id="city"
                name="city"
                required
                minLength={3}
                maxLength={50}
                placeholder="Votre Bourg"
              />
            </label>
            <p>Votre relation avec la sorcière:</p>
            <select
              className="selection"
              name="relationship"
              id="relationshipSelect"
            >
              <option className="optionSelect" value={null}></option>
              <option className="optionSelect" value="famille">
                famille
              </option>
              <option className="optionSelect" value="amis">
                amis
              </option>
              <option className="optionSelect" value="voisins">
                voisins
              </option>
              <option className="optionSelect" value="connaissances">
                connaissances
              </option>
              <option className="optionSelect" value="autre">
                autre
              </option>
            </select>
            {/* RENSEIGNEMENTS SUR LA SORCIERE */}
            <h2>A PROPOS DE LA SORCIERE</h2>
            <label htmlFor="witchFirstName">
              <input
                className="formInput"
                type="text"
                id="witchFirstName"
                name="witchFirstName"
                required
                minLength={3}
                maxLength={25}
                placeholder="Prénom de la sorcière"
              />
            </label>
            <label htmlFor="witchLastName">
              <input
                className="formInput"
                type="text"
                id="witchLastName"
                name="witchLastName"
                required
                minLength={3}
                maxLength={25}
                placeholder="Nom de la sorcière"
              />
            </label>
            <label htmlFor="witchCity">
              <input
                className="formInput"
                type="text"
                id="witchCity"
                name="witchCity"
                required
                minLength={3}
                maxLength={50}
                placeholder="Bourg de la sorcière"
              />
            </label>
            <div className="radiosQuestion">
              <p>La sorcière a-t-elle des cheveux roux* ?</p>
              <div className="radios">
                <input type="radio" /> <p className="inputRadiosText">Oui</p>{" "}
                <input type="radio" /> <p className="inputRadiosText">Non</p>{" "}
                <input type="radio" />{" "}
                <p className="inputRadiosText">Elle est chauve</p>
              </div>
            </div>
            <div className="preferencesForDeath">
              <p>Vos préférence pour la mort de la sorcière:</p>
              <select className="selection" name="death" id="deathChoice">
                <option className="optionSelect" value={null}></option>
                <option className="optionSelect" value="brûlée vive">
                  brulée vive
                </option>
                <option className="optionSelect" value="écartelée">
                  écartelée
                </option>
                <option className="optionSelect" value="étouffée">
                  étouffée
                </option>
                <option className="optionSelect" value="décapitée">
                  décapitée
                </option>
                <option className="optionSelect" value="noyée">
                  noyée
                </option>
                <option className="optionSelect" value="pendue">
                  pendue
                </option>
                <option className="optionSelect" value="torturée à mort">
                  torturée à mort
                </option>
              </select>
            </div>
            {/* MESSAGE DE CONTACT */}
            <label htmlFor="message" className="messageLabel">
              <textarea
                className="textareaForm"
                id="message"
                name="message"
                cols="30"
                rows="10"
                placeholder="Ecrivez ici ce qui vous fait penser que cette personne a fait preuve d'actes de sorcelleries."
              ></textarea>
            </label>
            {/* CONSENTEMENT DE LA COLLECTE DES INFORMATIONS */}
            <label htmlFor="dataConsent" className="dataCheckLabel">
              <div className="dataDiv">
                <input
                  className="formInput"
                  type="checkbox"
                  id="dataConsent"
                  name="dataConsent"
                  required
                />
                <p>
                  J accepte la collecte de mes données à des fins de
                  perquisition à la résidence de la sorcière dans le but de
                  procéder à son exécution dans les plus brefs délais pour le
                  bien de la nation.
                </p>
              </div>
            </label>
            <button className="submitButton" type="submit">
              <p className="submit">Envoyer</p>
            </button>
          </div>
          {/*ISSOU */}
          <div className="dataCheck"></div>
          <div className="submitDiv"></div>
        </div>
      </section>
      <p className="littleLines">
        *Si votre sorcière a les cheveux roux, ne l’approchez surtout pas, et
        brûlez tout ce qu’elle a pû toucher. Si elle est entrée dans votre
        maison, brûlez votre maison. Si elle a eu un contact avec vos enfants,
        brûlez vos enfants et refaites en d’autres. Si elle a eu contact avec
        direct avec vous, nos experts de l’inquisition se chargeront de vous et
        le représentant de la Sainte Eglise se chargera de préserver votre âme.
      </p>
    </form>
  );
}

export default Form;

import "../components/styles/DuckCard.css"
import PropTypes from "prop-types";
import Team from "../../Team.json"
import githubIcon from "../assets/home/icons8-github.svg"
import linkIcon from "../assets/home/icons8-linkedin.svg"

function DuckCard ({ toggleModalTeam, modalTeam }) {

    const TeamMember = Team.Team;


    return (

        <>
        <div className={modalTeam ? "overlayTeam active" :"overlayTeam" } onClick={toggleModalTeam}></div>
        {modalTeam && (

            <div className={modalTeam ? "aboutWrap" : "aboutWrap reverse"}>
    <div className="aboutUsCard front">
        {TeamMember.map((member) => (
                    <div className="dudeContainer" key={member.id}>
                    <img src={member.imageSRC} alt="Sushi" className="dude"/>
                    <div className="dudeInfos">
                        <p>{member.name}</p>
                        <a href={member.gitSRC} target="_blank"  rel="noreferrer"><img src={githubIcon} alt="github" className="socialMedia" /></a>
                        <a href={member.linkSRC} target="_blank" rel="noreferrer"><img src={linkIcon} alt="linkedin" className="socialMedia"/></a>
                    </div>
                </div>
        ))}
    </div>
    <div className="aboutUsCard back"></div>
    </div>

        )}
    
    </>
    )
}

DuckCard.propTypes = {
    toggleModalTeam: PropTypes.any,
    modalTeam: PropTypes.any,
};

export default DuckCard
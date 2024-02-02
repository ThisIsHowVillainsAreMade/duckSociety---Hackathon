import "./styles/HomeCard.css"
import { Link } from 'react-router-dom';
import Home from "../../Home.json"


function HomeCard () {

    const homeCards = Home.homeCard;

    return (
    <div id="homeCardContainer">
        {homeCards.map((card) => (
        <div className="homeCard" key={card.id}>
            <div className="homeCardContent">
                <h2>{card.name}</h2>
                <p>{card.desc}</p>
                <Link to={card.link} className="exploreLink" >Explore</Link>
            </div>
        </div>
        ))}
    </div>

    )
}

export default HomeCard
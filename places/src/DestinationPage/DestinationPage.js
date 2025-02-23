import pic1 from "./img/image-moon.webp";
import pic2 from "./img/image-mars.webp";
import pic3 from "./img/image-europa.webp";
import pic4 from "./img/image-titan.webp";

import "./css/style.css";
import { useState } from "react";

export default function DestinationPage() {
    const planets = [
        { id: 1, name: "Moon", description: "See our planet as you’ve never seen it before.", pic: pic1, distance: "384,400 km", time: "3 days" },
        { id: 2, name: "Mars", description: "Don’t forget to pack your hiking boots.", pic: pic2, distance: "225 mil. km", time: "9 months" },
        { id: 3, name: "Europa", description: "A winter lover’s dream.", pic: pic3, distance: "628 mil. km", time: "3 years" },
        { id: 4, name: "Titan", description: "A home away from home.", pic: pic4, distance: "1.6 bil. km", time: "7 years" },
    ];

    const [activePlanet, setActivePlanet] = useState(planets[0]);

    return (
        <div className="container">
            <header>
                <div className="right-card">
                    <div className="menu">
                        <h2>PICK YOUR DESTINATION</h2>
                        <ul>
                            {planets.map((planet) => (
                                <li key={planet.id} className={planet.id === activePlanet.id ? "active" : ""}>
                                    <button 
                                        onClick={() => setActivePlanet(planet)}
                                    >
                                        {planet.name}
                                    </button>
                                    {planet.id === activePlanet.id && <div className="underline"></div>}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="all-text">
                        <div className="style" >
                            <div className="img-container">
                                <img src={activePlanet.pic} alt={activePlanet.name} />
                            </div>            
                            <div className="planet-info">
                                <h1>{activePlanet.name.toUpperCase()}</h1>
                                <p>{activePlanet.description}</p>
                                <hr />
                                <div className="info">
                                    <div className="distance">
                                        <span>AVG. DISTANCE</span>
                                        <span>{activePlanet.distance}</span>
                                    </div>
                                    <div className="time">
                                        <span>EST. TRAVEL TIME</span>
                                        <span>{activePlanet.time}</span>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>   
            </header>
        </div>
    );
}

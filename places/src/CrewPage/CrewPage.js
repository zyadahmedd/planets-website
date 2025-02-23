import { useState, useEffect } from "react";
import img1 from "./img/image-douglas-hurley.webp";
import img2 from "./img/image-mark-shuttleworth.webp";
import img3 from "./img/image-victor-glover.webp";
import img4 from "./img/image-anousheh-ansari.webp";
import "./css/style.css"
export default function CrewPage() {

    let myobjct = [
        {
            id: 1,
            name: 'Douglas Hurley',
            job: 'Flight Engineer',
            img: img1,
            info: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
        },
        {
            id: 2,
            name: 'Mark Shuttleworth',
            job: 'Mission Specialist',
            img: img2,
            info: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
        },
        {
            id: 3,
            name: 'Victor Glover',
            job: 'Pilot',
            img: img3,
            info: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
        },
        {
            id: 4,
            name: 'Anousheh Ansari',
            job: 'Flight Engineer',
            img: img4,
            info: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
        }
    ];

    const [crew, setCrew] = useState(0);

    const changeCrew = (index) => { 
        setCrew(index);
    }
    useEffect(() => {
        localStorage.setItem("selectedCrew", crew);
    }, [crew]);

    return (
        <div class="container">
        <header>
          <h2>Meet your crew</h2>
        </header>
        <main>
          <div class="card">
            <div class="card__img">
              <img src={myobjct[crew].img} alt="" />
            </div>
            <div class="card__info">
              <h3>{myobjct[crew].job}</h3>
              <h1>{myobjct[crew].name}</h1>
              <p>{myobjct[crew].info}</p>
            </div>
          </div>
        </main>
        <div class="bollets">
            {myobjct.map((_, index) => (
                <div key={index} className={index === crew ? "new-bollet" : ""} 
                onClick={() => changeCrew(index)}>

                </div>
            ))}
        </div>
      </div>
      )
}
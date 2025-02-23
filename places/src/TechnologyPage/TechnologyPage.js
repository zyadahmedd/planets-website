import "./css/style.css";
import { useState, useEffect } from "react";
import img1 from "./img/image-launch-vehicle-portrait.jpg";
import img2 from "./img/image-spaceport-portrait.jpg";
import img3 from "./img/image-space-capsule-portrait.jpg";

export default function  TechnologyPage () {
    const myObjectTechnology = [
        {
            id: 1,
            title: "The terminology...",
            name: "Launch vehicle",
            description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            images: img1
        },
        {
            id: 2,
            title: "The terminology...",
            name: "Spaceport",
            description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
            images: img2
        },
        {
            id: 3,
            title: "The terminology...",
            name: "Space capsule",
            description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            images: img3
        }
    ];

    const [number, setNumber] = useState(1);
    const [content, setContent] = useState(myObjectTechnology[0]);

    useEffect(() => {
        setContent(myObjectTechnology.find((item) => item.id === number));
    }, [number]);
    
    return (
        <div className="container">
            <h2>Space Launch 101</h2>
            <header>
                <div className="box">
                    <div className="number">
                        {myObjectTechnology.map((item) => (
                            <span 
                                key={item.id} 
                                className={number === item.id ? "active-num" : ""} 
                                onClick={() => setNumber(item.id)}
                            >
                                {item.id}
                            </span>
                        ))}
                    </div>
                    <div className="content">
                        <h3>{content.title}</h3>
                        <h1>{content.name}</h1>
                        <p>{content.description}</p>
                    </div>
                    <div className="img">
                        <img src={content.images} alt={content.name} />
                    </div>
                </div>
            </header>
        </div>
    );
}

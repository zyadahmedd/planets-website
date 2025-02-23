import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./img/logo.svg";
import iconnav from "./img/icon-hamburger.svg";

export default function NavPage() {
    const location = useLocation();
    
    const pages = [
        { id: 1, name: "Home", path: "/HomePage" },
        { id: 2, name: "Destination", path: "/DestinationPage" },
        { id: 3, name: "Crew", path: "/CrewPage" },
        { id: 4, name: "Technology", path: "/TechnologyPage" },
    ];
    
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [activePath, setActivePath] = useState(location.pathname);
    
    useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname]);

    useEffect(() => {
        const nav = document.querySelector('nav');
        if (nav) {
            if (isNavVisible) {
                nav.classList.add("show");
                nav.classList.remove("hidden");
            } else {
                nav.classList.add("hidden");
                nav.classList.remove("show");
            }
        }
    }, [isNavVisible]);
    
    return (
        <div className="container-nav" style={{margin: "0 auto" ,display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav className={isNavVisible ? "show" : "hidden"}>
                <ul>
                    {pages.map((page) => (
                        <li key={page.id} className={page.path === activePath ? "active" : ""}>
                            <Link to={page.path}>{page.name}</Link>
                            {page.path === activePath && <div className="underline"></div>}
                        </li>
                    ))}
                </ul>
            </nav>
            <img
                id="icon"
                src={iconnav}
                alt="Menu Icon"
                onClick={() => setIsNavVisible(!isNavVisible)}
            />
        </div>
    );
}

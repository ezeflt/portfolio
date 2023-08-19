import React, { useEffect } from 'react';
import "../../../../public/css/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Navbar = () => {

    /**
     * Description :
     * when the component is mounted, creates an animation on each navbar item
     */
    useEffect(()=>{

        // GET ScrollTrigger for scroll animations
        gsap.registerPlugin(ScrollTrigger);

        // GET each navbar item
        const listItems = document.querySelectorAll('.nav-list');

        // create an animation for each navbar item
        gsap.fromTo(listItems, 
            {y:'-10px', opacity:0}, 
            {y:'0px', opacity:1, stagger:0.2}
            );
    },[])

    return (
        <>
        {/* header */}
        <header className='header'>
            {/* logo */}
            <figure>
                <img src='/img/accueilImg/logo.png' />
            </figure>
            {/* navbar */}
            <nav>
                <ul>
                    <a href='#home'><li className="nav-list">Accueil</li></a>
                    <a href='#containerSkills'><li className="nav-list">Compétences</li></a>
                    <a href='#projetContainer'><li className="nav-list">Projets</li></a>
                    <a href='#contactContainer'><li className="nav-list">Contact</li></a>
                </ul>
                <FontAwesomeIcon className='menu' icon={faBars} />
            </nav>
        </header>
    </>
    );
};

export default Navbar;
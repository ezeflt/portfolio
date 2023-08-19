"use client"; // obligation de le mettre depuis next v13 👈🏽
import React, { useEffect, useState } from 'react';
import '../../../../public/css/Skills.css';
import gsap from "gsap";
import Typed from "react-typed";
import {dataLangageBackend, dataLangageFrontend} from './dataSkills'; // GET skills data
import { animationNavbar} from './animation';   // GET the function of navbar animations
import Langage from './langage/Langage';        // GET the child langage component


const Skills = () => {

    // the state to hold value of the display title
    const [scrollToTitle, setScrollToTitle] = useState(false);
    
    /**
     * Description :
     * when the componoent is mounted, activate the scrolling animations
     */
    useEffect(()=>{

        // use the animation Navbar function that change the navbar color
        animationNavbar();

        // use skills animations if the user uses a (desktop, laptop)
        if(innerWidth>1000){
            
            gsap.set('#article1', {y:'-100%', opacity:0});  // don't display the frontend skills
            gsap.set('#article2', {y:'-100%', opacity:0});  // don't display the backend  skills

            // when the user scrolls on skills page, activate the skills animations
            gsap.to('#article1', { scrollTrigger:{
                trigger: '#containerSkills',
                markers: false,
                start: "top +=500",
                end: "bottom bottom",
                onEnter:()=> ( gsap.to(['#article1', '#article2'] ,{ y:'0%', duration: 1, stagger:0.2, opacity:1}), setScrollToTitle(true) ),
            }})
          }
    },[])

    // the FrontEndLangage variable value is a loop througth the frontend skills
    const FrontEndLangage = dataLangageFrontend.map((data)=>{
        return <Langage descriptionPage={false} titleLangage={data.titleLangage} img={data.img} />
    })
    // the BackEndLangage variable value is a loop througth the backend skills
    const BackEndLangage = dataLangageBackend.map((data)=>{
        return <Langage descriptionPage={false} titleLangage={data.titleLangage} img={data.img} />
    })

    return (
        <div id='containerSkills'>
            <section>
                 <h1>{scrollToTitle ?<Typed strings={["Front-End"]} startDelay={1000} typeSpeed={30} showCursor={false}><span></span></Typed>: 'Front-end'}</h1>
                <article id='article1'>
                    {FrontEndLangage}
                </article>
            </section>
            <section id='sectionBorder'>
                <h1>{scrollToTitle ?<Typed strings={["Back-End"]} startDelay={1000} typeSpeed={30} showCursor={false}><span></span></Typed>: 'Back-end'}</h1>
                <article id='article2'>
                    {BackEndLangage}
                </article>
            </section>
        </div>
    );
};

export default Skills;
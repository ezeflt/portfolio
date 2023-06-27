"use client"; // obligation de le mettre depuis next v13 👈🏽
import React, { useEffect, useRef, useState } from 'react';
import '../../../../public/css/Skills.css';
import Langage from './langage/Langage';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Typed from "react-typed";

//import data front & back pour le map du composant Langage
// import fonction qui change la couleur de la navbar au scroll
import {dataLangageBackend, dataLangageFrontend} from './dataSkills';
import { animationNavbar ,animationSkills} from './animation';



const Skills = () => {

    const [scrollToTitle, setScrollToTitle] = useState(false);
    
    useEffect(()=>{
        // applique la fonction qui change la couleur de la navbar au
        animationNavbar();

        

        if(innerWidth>1000){
            
            gsap.set('#article1', {y:'-100%', opacity:0});
            gsap.set('#article2', {y:'-100%', opacity:0});

            gsap.to('#article1', { scrollTrigger:{
                trigger: '#containerSkills',
                markers: false,
                start: "top +=500",
                end: "bottom bottom",
                onEnter:()=> ( gsap.to(['#article1', '#article2'] ,{ y:'0%', duration: 1, stagger:0.2, opacity:1}), setScrollToTitle(true) ),
            }})
          }
    },[])

    //map sur le composant enfant en lui passant la data front
    const FrontEndLangage = dataLangageFrontend.map((data)=>{
        return <Langage descriptionPage={false} titleLangage={data.titleLangage} img={data.img} />
    })
    //map sur le composant enfant en lui passant la data front
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
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useState } from "react";

const animationNavbar = () =>{

        gsap.registerPlugin(ScrollTrigger);

        const listItems = document.querySelectorAll('.nav-list');
        const container = document.querySelector('#containerSkills');

        gsap.to(listItems, {scrollTrigger:{
                trigger: container,
                markers: false,
                scrub: true,
                start: "top top",
                end: "bottom bottom",
                onEnter:()=> (gsap.to(listItems,{backgroundColor:'#fff', color:'#000'})),
                onLeaveBack:()=> (gsap.to(listItems,{backgroundColor:'#482323', color:'#A3A3A3'}))
        }});

}

const animationSkills = ()=>{

        const container = document.querySelector('#containerSkills');
        const boxSkills = document.querySelector('#containerSkills section article');
        const boxSkills2 = document.querySelector('#article2');

        gsap.set(boxSkills, {y:'-100%', opacity:0});
        gsap.set(boxSkills2, {y:'-100%', opacity:0});

        gsap.to(boxSkills, { scrollTrigger:{
            trigger: container,
            markers: false,
            start: "top +=500",
            end: "bottom bottom",
            onEnter:()=> ( gsap.to([boxSkills, boxSkills2] ,{ y:'0%', duration: 1.1, stagger:0.2, opacity:1}) ),
        }})
}

module.exports = { animationNavbar ,animationSkills };

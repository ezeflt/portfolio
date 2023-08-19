import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

/**
 * Description :
 * when the user scrolls to skills page
 * change the navbar color
 */
const animationNavbar = () =>{

        gsap.registerPlugin(ScrollTrigger); // initialise the scrollTrigger for to scroll animation

        const listItems = document.querySelectorAll('.nav-list');       // GET each list of navbar
        const container = document.querySelector('#containerSkills');   // GET the skills page

        gsap.to(listItems, {scrollTrigger:{
                trigger: container,
                markers: false,
                scrub: true,
                start: "top top",
                end: "bottom bottom",
                // on enter scroll, change the background color of navbar list (white background color)
                onEnter:()=> (gsap.to(listItems,{backgroundColor:'#fff', color:'#000'})),
                // on leave scroll, change the background color of navbar list (black background color)
                onLeaveBack:()=> (gsap.to(listItems,{backgroundColor:'#482323', color:'#A3A3A3'}))
        }});

}

module.exports = { animationNavbar };

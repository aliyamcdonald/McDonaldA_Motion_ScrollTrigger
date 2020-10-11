import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section3TL = gsap.timeline();

section3TL.from("#section-3 div",{duration: 0.01, alpha:0, x: -300})


export function section3Animation(){
    ScrollTrigger.create({

        markers: true,
        animation: section3TL,
        toggleActions: "restart none reverse none",
        trigger: "#section-3",
        scrub: 1,
        start:"top, 90%",
        end: "bottom 90%"

    });
}
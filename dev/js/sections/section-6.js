import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section6TL = gsap.timeline();

section6TL.from("#section-6 div",{duration: 0.5, alpha:0, x: -300})
        .from("#section-6 p",{duration: 0.5, alpha:0, x: 300})


export function section6Animation(){
    ScrollTrigger.create({

        // markers: true,
        animation: section6TL,
        toggleActions: "restart none reverse none",
        trigger: "#section-6",
        start:"top, 50%",
        end: "bottom 50%"

    });
}
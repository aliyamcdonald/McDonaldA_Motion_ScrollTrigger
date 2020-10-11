import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section5TL = gsap.timeline();

section5TL.from("#sheep",{duration: 0.7, alpha:0, x: -300})


export function section5Animation(){
    ScrollTrigger.create({

        // markers: true,
        animation: section5TL,
        toggleActions: "restart none reverse none",
        trigger: "#section-5",
        start:"top, 50%",
        end: "bottom 50%"

    });
}
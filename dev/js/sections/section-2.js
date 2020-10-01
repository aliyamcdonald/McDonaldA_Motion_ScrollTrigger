import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section2TL = gsap.timeline();

section2TL.from("#section-2-container aside",{duration: 0.5, alpha:0, x: -300})
        .from("#section-2-right-content",{duration: 0.5, alpha:0, rotate: 180})


export function section2Animation(){
    ScrollTrigger.create({

        markers: true,
        animation: section2TL,
        toggleActions: "play none none none",
        trigger: "section-2",
        start:"top, 50%",
        end: "bottom 50%"

    });
}
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section4TL = gsap.timeline();

section4TL.from("#section-4",{duration: 0.5, alpha:0, x: -300})
        


export function section4Animation(){
    ScrollTrigger.create({

         // markers: true,
         animation: section4TL,
         toggleActions: "restart none reverse none",
         trigger: "#section-4",
         scrub: 1,
         start:"top, 70%",
         end: "bottom 70%"
    });
}
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section4TL = gsap.timeline();

section2TL.from("section-4-content",{duration: 0.5, alpha:0, x: -300})
        


export function section4Animation(){
    ScrollTrigger.create({

         // markers: true,
         animation: section4TL,
         toggleActions: "restart none reverse none",
         trigger: "section-4",
         scrub: 1,
         start:"top, 50%",
         end: "bottom 50%"
    });
}
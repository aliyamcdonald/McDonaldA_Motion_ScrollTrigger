import{gsap}from"gsap";import{ScrollTrigger}from"gsap/ScrollTrigger";gsap.registerPlugin(ScrollTrigger);const section5TL=gsap.timeline();section5TL.from("#section-5 sheep",{duration:.5,alpha:0,x:-300}).from("#section-5 deer",{duration:.5,alpha:0,x:-300}).from("#section-5 rabbit",{duration:.5,alpha:0,x:-300});export function section5Animation(){ScrollTrigger.create({animation:section5TL,toggleActions:"restart none reverse none",trigger:"#section-5",start:"top, 50%",end:"bottom 50%"})}
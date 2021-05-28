import { gsap } from "gsap";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

// gsap.registerPlugin(DrawSVGPlugin);

let startTL = gsap.timeline();

startTL.to("#progress_bar",{duration: 3,opacity: 10});


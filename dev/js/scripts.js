import { gsap } from "gsap";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

// gsap.registerPlugin(DrawSVGPlugin);

let startTL = gsap.timeline();

startTL
.to("#progress_bar_black_overlay",{duration: 1, opacity: 10});


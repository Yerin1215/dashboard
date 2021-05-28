import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


let drawTL = gsap.timeline();

// gsap.set("#myPath", { scaleX: -1, scaleY:-1, transformOrigin: "center center" });

// drawTL.to("#myPath",{duration:2, drawSVG:0});
// drawTL.from("#myPath",{duration:2, drawSVG:0});
// drawTL.from("#myPath",{duration:2, drawSVG:"60% 200px" });

drawTL.fromTo("#myPath",{drawSVG:"0% 10%" },{duration:2, drawSVG:"95% 100%", ease:"bounce.out"})
    .to("#myPath",{duration:2, drawSVG:"0% 100%"});
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

let startTL = gsap.timeline();

startTL.from("#big_logo",{alpha:0, duration:2.3})
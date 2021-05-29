import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);



export let frameTL = gsap.timeline();

// gsap.set(".after", {display:"block"})

frameTL.to("#big_logo", {duration: 1.2, scale: 0.27, y:"-=240", x:"+=177"}, "-=0.8")
       .to("#entire_frames", {duration:"2", opacity:"1"}, "-=0.5")
       .from("#speedometer_frame_outline", {display:"block", duration:1, drawSVG:0}, "-=1.7")
       .to("#speedometer_frame", {duration:"1.3", opacity:"1"}, "-=1.3")
       .from("#battery_frame_outline, #battery_frame_outline_1_", {display:"block", duration:1, drawSVG:0}, "-=0.3")
       .to("#battery_frame, #battery_frame_1_", {duration:"2", opacity:"1"}, "-=1.3")
      

     
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);



export let frameTL = gsap.timeline();

// gsap.set(".after", {display:"block"})

frameTL.to("#big_logo", {duration: 1.2, scale: 0.27, y:"-=289"}, "-=0.8")
       .to("#entire_frames", {duration:"2", opacity:"1"}, "-=0.5")
       .from("#speedometer_frame_outline", {display:"block", duration:1, drawSVG:0}, "-=1.7")
       .to("#speedometer_frame", {duration:"1.3", opacity:"1"}, "-=1.3")
       .to("#D,#N,#R,#P, #sunny,#cloudy,#windy,#rainny", {duration:"1.4", opacity:"0.3"}, "-=2.3")
       .from("#battery_frame_outline, #battery_frame_outline_1_", {display:"block", duration:1, drawSVG:0}, "-=0.3")
       .to("#battery_frame, #battery_frame_1_, #inner_circle", {duration:"2", opacity:"1"}, "-=1.3")
       .to("#line_1_, #TIME, #TEMPERATURE, #line_2_, #line,#music", {display:"block"}, "-=1")
       .to("#speedtext,#kmh,#distancetext, #batterytext,#percent,#timenumber,#next_song_icon,#rewind_icon,#pause_icon,#degree,#icon", {display:"block"}, "-=0.6");
      

     
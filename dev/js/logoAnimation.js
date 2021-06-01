import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);



export let logoAnimationTL = gsap.timeline();

gsap.set("#big_logo", {transformOrigin: "center"})
gsap.set(".after", {display:"none"})
gsap.set("#entire_frames, #speedometer_frame, #battery_frame, #battery_frame_1_, #D,#N,#R,#P, #sunny,#cloudy,#windy,#rainny, #inner_circle", {opacity:"0"})


logoAnimationTL.to("#progress_bar_black_overlay",{duration:6, x:"+=900"})
            .to("#first_reveal_1_",{duration:1.4, y:"+=230"}, "-=6")
            .to("#second_reveal_1_",{duration:3.4, x:"+=700"}, "-=5.3")
            .to("#thrid_reveal_1_",{duration:2.2, y:"+=400"}, "-=4.6")
            .to("#fourth_reveal",{duration:2, x:"+=300"}, "-=4")
            // .to("#fourth_reveal",{duration:1, opacity:"0"}, "-=5")
            .to("#last_reveal",{duration:2, y:"+=500"}, "-=3.2")
            .to("#reveal_group",{opacity:0}, "-=2.3")
            .to("#big_logo", {duration:1,scale:1.3}, "-=1.7")
            .to("#big_logo", {duration:1,scale:1}, "-=1.5")
            .to("#progress_bar_group" ,{opacity:0}, "-=1.2");
            


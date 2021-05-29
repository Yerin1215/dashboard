import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);



export let logoAnimationTL = gsap.timeline();

gsap.set(".after", {display:"none"})
gsap.set("#entire_frames, #speedometer_frame, #battery_frame, #battery_frame_1_", {opacity:"0"})


logoAnimationTL.to("#progress_bar_black_overlay",{duration:6, x:"+=900"})
            .to("#first_reveal_1_",{duration:1.4, y:"+=230"}, "-=6")
            .to("#second_reveal_1_",{duration:3.4, x:"+=500"}, "-=5.3")
            .to("#thrid_reveal_1_",{duration:0.7, opacity:"0"}, "-=4.6")
            .to("#fourth_reveal",{duration:1.4, x:"+=250"}, "-=4")
            // .to("#fourth_reveal",{duration:1, opacity:"0"}, "-=5")
            .to("#last_reveal",{duration:1.2, y:"+=200"}, "-=3.2")
            .to("#progress_bar_group, #reveal_group",{opacity:0}, "-=1.2");
            


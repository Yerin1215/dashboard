import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


export let driveTL = gsap.timeline();



driveTL.to("#D", {duration:"1.2", opacity:"1", scale:1.6, x:"+=14", y:"+=100"})
        .to("#windy", {duration:"1.2", opacity:"1", scale:1.6, x:"-=24", y:"-=40"}, "-=1.2")
        .to("#N, #R,#P,#sunny,#cloudy,#rainny", {duration:"1", opacity:"0"}, "-=1.3")
        .to("#car,#batterygradient_1_, #batterygradient,#rectangle,#distancenumber,#distanceunit", {display:"block"}, "-=0.3")
        .to("#first_line_1_",{duration:0.15, scaleY:1.5,yoyo:true, repeat:-1})
        .to("#second_line",{duration:0.15, scaleY:1.5,yoyo:true, repeat:-1})
        .to("#third_line",{duration:0.15, scaleY:1.5,yoyo:true, repeat:-1});












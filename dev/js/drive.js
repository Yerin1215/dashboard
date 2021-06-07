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
        .to("#third_line",{duration:0.15, scaleY:1.5,yoyo:true, repeat:-1})


        .to("#speedtext", {opacity:"0"})
        .to("#speedtext2,#gradation_fill,#gradation_fill_1_,#first,#second,#third,#fourth,#fifth,#last", {display:"block"}, "-=0.3")
        .to("#speedtext2,#first,#batterytext", {opacity:"0"})
        .to("#speedtext3,#batterytext2", {display:"block"}, "-=0.3")
        .to("#rectangle", { y:"+=7"}, "-=0.3")
        .to("#speedtext3,#second", {opacity:"0"},"+=0.7")
        .to("#speedtext4", {display:"block"}, "-=0.3")
        .to("#speedtext4,#third,#distancenumber,#timenumber", {opacity:"0"})
        .to("#speedtext5,#distancenumber2,#timenumber2", {display:"block"}, "-=0.3")
        .to("#speedtext5,#fourth", {opacity:"0"},"+=2.0")
        .to("#speedtext6", {display:"block"}, "-=0.3")
        .to("#batterytext2,#timenumber2", {opacity:"0"})
        .to("#batterytext3,#timenumber3", {display:"block"}, "-=0.3")
        .to("#rectangle", { y:"+=7"}, "-=0.3")

        .to("#speedtext6,#distancenumber2", {opacity:"0"},"+=1.7")
        .to("#speedtext5,#fourth", {opacity:"1"}, "-=0.3")
        .to("#distancenumber3", {display:"block"}, "-=0.5")

        .to("#speedtext5,#fourth,#fifth", {opacity:"0"},"+=1.7")
        .to("#speedtext7", {display:"block"}, "-=0.3")

      
        .to("#batterytext3,#distancenumber3", {opacity:"0"})
        .to("#batterytext4,#distancenumber4", {display:"block"}, "-=0.3")
        .to("#rectangle", { y:"+=7"}, "-=0.3")
        .to("#batterytext4", {opacity:"0"})
        .to("#batterytext5", {display:"block"}, "-=0.3")
        .to("#rectangle", { y:"+=7"}, "-=0.3")

        .to("#speedtext7", {opacity:"0"},"+=1.7")
        .to("#speedtext6,#fifth", {opacity:"1"}, "-=0.3")
        .to("#speedtext6", {opacity:"0"},"+=1.7")
        .to("#speedtext5,#fourth", {opacity:"1"}, "-=0.3")
        .to("#speedtext5", {opacity:"0"},"+=1.7")
        .to("#speedtext4,#third", {opacity:"1"}, "-=0.3")
        .to("#batterytext5,#timenumber3", {opacity:"0"})
        .to("#batterytext6,#timenumber4", {display:"block"}, "-=0.3")
        .to("#rectangle", { y:"+=7"}, "-=0.3")
        .to("#speedtext4", {opacity:"0"},"+=1.7")
        .to("#speedtext3,#second", {opacity:"1"}, "-=0.3")
        .to("#speedtext3", {opacity:"0"},"+=1.7")
        .to("#speedtext2,#first", {opacity:"1"}, "-=0.3")
        .to("#speedtext2,#gradation_fill,#gradation_fill_1_", {opacity:"0"},"+=2.0")
        .to("#speedtext", {opacity:"1"}, "-=0.3")
        
        
        
        .to("#car,#distancenumber4,#distanceunit,#windy,#gradation_fill,#gradation_fill_1_", {opacity:0})
        .to("#D", {duration:"1.2", opacity:"0.3", scale:1, x:"-=14", y:"-=100"})
        .to("#N,#R,#P", {duration:"1", opacity:"0.3"})
        .to("#P", {duration:"1.2", opacity:"1", scale:1.6, x:"+=14", y:"-=100"})
        .to("#N,#R,#D", {duration:"1", opacity:"0"}, "-=1.3")
        .to("#P,first,#second,#third,#fourth,#fifth,#last,#entire_frames,#batterygradient_1_, #batterygradient,#battery_frame_outline, #battery_frame_outline_1_,#battery_frame, #battery_frame_1_, #inner_circle,#line_1_, #TIME, #TEMPERATURE, #line_2_, #line,#music,#speedtext,#kmh,#distancetext, #batterytext,#percent,#timenumber,#next_song_icon,#rewind_icon,#pause_icon,#degree,#icon,#speedometer_frame_outline,#speedometer_frame,#gradation_fill,#gradation_fill_1_,#batterytext6,#timenumber4", {opacity:0})
        .to("#big-logo",{y:"+=100", scale:0.45})
        .to("#big_logo", {duration:3,scale:0,opacity:0});
        


        
        












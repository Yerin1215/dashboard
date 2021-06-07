import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { logoAnimationTL } from "./logoAnimation"
import { frameTL } from "./frame"
import { driveTL } from "./drive"





gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(logoAnimationTL)
      .add(frameTL)
      .add(driveTL);
    





      // mainTL.play("marker");
      mainTL.play();

      // console.log(numberThing);
      
      // GSDevTools.create();
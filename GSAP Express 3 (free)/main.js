import "./style.css";
import { gsap } from "gsap";

const animation = gsap.timeline();
animation
  .to(".star", { duration: 2, x: 100 })
  .to(".triangle", { duration: 3, x: 100 }, 3)
  .to(".rectangle", { duration: 1, x: 100 }, "<0.5");

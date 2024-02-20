import "./style.css";
import { gsap } from "gsap";

const item = document.querySelector(".item");
gsap.defaults({ duration: 0.3 });

const tl = gsap
  .timeline({ paused: true })
  .to(".text", { color: "purple", x: 10 })
  .to(".dot", { backgroundColor: "orange", scale: 1.5 }, 0);

item.addEventListener("mouseenter", () => tl.play());
item.addEventListener("mouseleave", () => tl.reverse());

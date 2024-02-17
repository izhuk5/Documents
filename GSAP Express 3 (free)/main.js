import "./style.css";
import { gsap } from "gsap";

gsap.set(".container", { scale: 0.7 });

gsap
  .timeline()
  .from(".container", { opacity: 0, duration: 1 })
  .from(".space-title", { opacity: 0, scale: 0, ease: "back" })
  .from(".stars-container svg", {
    y: 160,
    stagger: 0.1,
    duration: 0.6,
    opacity: 0,
    ease: "back",
  });

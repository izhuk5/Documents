import "./style.css";
import { gsap } from "gsap";

const items = document.querySelectorAll(".item");
gsap.defaults({ duration: 0.3 });

items.forEach(function (item, index) {
  const tl = gsap
    .timeline({ paused: true })
    .to(item.querySelector(".text"), {
      color: "purple",
      x: 10,
      scale: 1.3,
      transformOrigin: "left center",
    })
    .to(item.querySelector(".dot"), { backgroundColor: "orange", scale: 1.5 }, 0);

  item.addEventListener("mouseenter", () => tl.play());
  item.addEventListener("mouseleave", () => tl.reverse());
});

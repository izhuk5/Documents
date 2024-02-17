import "./style.css";
import { gsap } from "gsap";

const button = document.querySelector(".button");
const bg = document.querySelector(".bg");

//rollover the hover circle quickly
//notice the inner circle stops working properly
//try to fix it in the code below!

button.addEventListener("mouseenter", function () {
  console.log(gsap.getProperty(bg, "scale"));
  gsap.fromTo(
    bg,
    { scale: 0, duration: 1 }, // from value
    { scale: 1, ease: "circ" } // to value
  );
});

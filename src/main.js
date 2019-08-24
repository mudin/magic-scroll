import MagicScroll from "./MagicScroll.js";

let magicScroll = new MagicScroll({
  target: document.querySelector(".scroll-view.after"),
  speed: 80,
  smooth: 12
});

magicScroll.onUpdate = a => {
  console.log(a);
  document.querySelector("#after-scroll").innerHTML = Math.round(a);
};

const beforeEl = document.querySelector(".scroll-view.before");
beforeEl.addEventListener("scroll", e => {
  document.querySelector("#before-scroll").innerHTML = e.target.scrollTop;
});

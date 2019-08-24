import MagicScroll from "./MagicScroll.js";

let magicScroll = new MagicScroll({
  target: document.querySelector(".scroll-view.after"),
  speed: 80,
  smooth: 12
});

magicScroll.onUpdate = a => {
  console.log(a);
  document.querySelector("#time-now").innerHTML = Math.round(a);
};

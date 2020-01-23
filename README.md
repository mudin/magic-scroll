<p align="center">
  <a href="https://github.com/mudin/magic-scroll/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mudin/magic-scroll.svg" alt="License">
  </a>
  <a href="https://badge.fury.io/js/magic-scroll">
    <img src="https://badge.fury.io/js/magic-scroll.svg" alt="npm version">
  </a>
  <a href="http://hits.dwyl.io/mudin/magic-scroll">
    <img src="http://hits.dwyl.io/mudin/magic-scroll.svg" alt="HitCount">
  </a>
  <a href="https://unpkg.com/magic-scroll.js@latest/dist/MagicScroll.cjs.js">
    <img src="https://img.badgesize.io/mudin/magic-scroll/master/dist/MagicScroll.cjs.js?compression=gzip" alt="size">
  </a>
</p>

# MagicScroll

## Why MagicScroll?
If you have tried to use Apple magic mouse or macbook Trackpad, the scroll is very smooth. However normal scroll is not.
In order to make the smilar effect I have tried to implement MagicScroll.
We can apply this for any kind of place where mouse wheel is need to be smooth (For example, IndoorJS demo below)


## [Demo](https://mudin.github.io/magic-scroll/)

![Demo](https://mudin.github.io/magic-scroll/magic-scroll.gif)

## [JS fiddle demo](https://jsfiddle.net/mudin/2nstb5pf/)
## [IndoorJS demo](https://mudin.github.io/indoorjs/)

## Install

```
  npm i magic-scroll.js -S
```
or
```
https://unpkg.com/magic-scroll.js/dist/MagicScroll.umd.js
```
## Usage

```
let magicScroll = new MagicScroll({
  target: document.querySelector(".scroll-view.after"), // for body, no need to set target
  speed: 80,
  smooth: 12
});
```

## License

[MIT](LICENSE).

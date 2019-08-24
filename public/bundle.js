(function () {
  'use strict';

  class MagicScroll {
    constructor(options) {
      Object.assign(this, options);

      if (this.target === document)
        this.target =
          document.scrollingElement ||
          document.documentElement ||
          document.body.parentNode ||
          document.body; // cross browser support for document scrolling

      this.speed = this.speed || 80;
      this.smooth = this.smooth || 12;
      this.pos = this.current || 0;
      this.frame =
        this.target === document.body && document.documentElement
          ? document.documentElement
          : this.target; // safari is the new IE

      this.min = this.min || 0;
      this.max = this.target.scrollHeight - this.target.clientHeight;

      this.moving = false;

      this.target.scrollTop = this.pos;

      this.target.addEventListener("mousewheel", scrolled, { passive: false });
      this.target.addEventListener("DOMMouseScroll", scrolled, {
        passive: false
      });
      this.target.addEventListener(
        "scroll",
        e => {
          if (!this.moving) {
            this.pos = e.target.scrollTop;
          }
        },
        { passive: false }
      );
      const scope = this;
      function scrolled(e) {
        //e.preventDefault(); // disable default scrolling

        var delta = scope.normalizeWheelDelta(e);

        scope.pos += -delta * scope.speed;
        scope.pos = Math.max(0, Math.min(scope.pos, scope.max)); // limit scrolling

        if (!scope.moving) scope.update();
      }
    }

    normalizeWheelDelta(e) {
      if (e.detail) {
        if (e.wheelDelta)
          return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1);
        // Opera
        else return -e.detail / 3; // Firefox
      } else return e.wheelDelta / 120; // IE,Safari,Chrome
    }

    update() {
      this.moving = true;
      console.log(this.pos - this.target.scrollTop);

      var delta = (this.pos - this.target.scrollTop) / this.smooth;
      console.log(delta);

      this.target.scrollTop += delta;

      if (this.onUpdate) {
        this.onUpdate(this.target.scrollTop);
      }
      const scope = this;
      if (Math.abs(delta) > 0.5)
        requestFrame(() => {
          scope.update();
        });
      else this.moving = false;
    }
  }

  var requestFrame = (function() {
    // requestAnimationFrame cross browser
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(func) {
        window.setTimeout(func, 1000);
      }
    );
  })();

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

}());
//# sourceMappingURL=bundle.js.map

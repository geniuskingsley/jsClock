/**
 *
 * @Genius
 */

"use strict";

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hour = date.getHours();
    if (hour < 10) hour = "0" + hour;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let outPut = this.template
      .replace("h", hour)
      .replace("m", mins)
      .replace("s", secs);

    console.log(outPut);
  }

  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let clock = new Clock({ template: "h:m:s" });
clock.start();

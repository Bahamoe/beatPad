import { createElement } from "../helpers";

export class Timeline {
  rootElement: HTMLElement;
  progressElement: HTMLElement;
  sliderElement: HTMLElement;
  pinElement: HTMLElement;
  currentTimeElement: HTMLSpanElement;
  totalTimeElement: HTMLSpanElement;
  currentlyDragged: boolean;
  constructor() {
    this.currentlyDragged = false;
    this.initalizeDOMNodes();
  }
  updateProgress(currentTime: number, duration: number) {
    var current = currentTime;
    var percent = (current / duration) * 100;
    this.progressElement.style.width = percent + "%";

    this.currentTimeElement.textContent = this.formatTime(current);
  }
  formatTime(time: number) {
    var min = Math.floor(time / 60);
    var sec = Math.floor(time % 60);
    return min + ":" + (sec < 10 ? "0" + sec : sec);
  }
  loadNew(duration: number) {
    this.totalTimeElement.textContent = this.formatTime(duration);
  }
  /**
   * Creates all the dom elements for the audio info on the screen
   */
  initalizeDOMNodes() {
    this.pinElement = createElement({
      elementType: "div",
      classNames: ["pin"],
      attributes: { "data-method": "rewind", id: "progress-pin" },
    });
    this.progressElement = createElement({
      elementType: "div",
      classNames: ["progress"],
      attributes: { "js-progress": "" },
      children: [this.pinElement],
    });
    this.sliderElement = createElement({
      elementType: "div",
      classNames: ["slider"],
      attributes: { "data-direction": "horizontal", "js-slider": "" },
      children: [this.progressElement],
    });

    this.currentTimeElement = createElement({
      elementType: "span",
      classNames: ["current-time", "text", "text--glow"],
      attributes: { "js-current-time": "" },
      text: "0:00",
    });
    this.totalTimeElement = createElement({
      elementType: "span",
      classNames: ["total-time", "text", "text--glow"],
      attributes: { "js-total-time": "" },
      text: "0:00",
    });

    this.rootElement = createElement({
      elementType: "div",
      classNames: ["display__timeline"],
      attributes: { "js-timeline": "" },
      children: [
        this.currentTimeElement,
        this.sliderElement,
        this.totalTimeElement,
      ],
    });
  }

  // getRangeBox(event) {
  //   let rangeBox = event.target;
  //   let el = this.currentlyDragged;
  //   if (event.type == "click" && isDraggable(event.target)) {
  //     rangeBox = event.target.parentElement.parentElement;
  //   }
  //   if (event.type == "mousemove") {
  //     rangeBox = el.parentElement.parentElement;
  //   }
  //   return rangeBox;
  // }
  // isDraggable(el) {
  //   let canDrag = false;
  //   let classes = Array.from(el.classList);
  //   draggableClasses.forEach(draggable => {
  //     if(classes.indexOf(draggable) !== -1)
  //       canDrag = true;
  //   })
  //   return canDrag;
  // }
  // inRange(event) {
  //   let rangeBox = this.getRangeBox(event);
  //   let rect = rangeBox.getBoundingClientRect();
  //   let direction = rangeBox.dataset.direction;
  //   if(direction == 'horizontal') {
  //     var min = rangeBox.offsetLeft;
  //     var max = min + rangeBox.offsetWidth;
  //     if(event.clientX < min || event.clientX > max) return false;
  //   } else {
  //     var min = rect.top;
  //     var max = min + rangeBox.offsetHeight;
  //     if(event.clientY < min || event.clientY > max) return false;
  //   }
  //   return true;
  // }
  // getCoefficient(event) {
  //   let slider = getRangeBox(event);
  //   let rect = slider.getBoundingClientRect();
  //   let K = 0;
  //   if(slider.dataset.direction == 'horizontal') {

  //     let offsetX = event.clientX - slider.offsetLeft;
  //     let width = slider.clientWidth;
  //     K = offsetX / width;

  //   } else if(slider.dataset.direction == 'vertical') {

  //     let height = slider.clientHeight;
  //     var offsetY = event.clientY - rect.top;
  //     K = 1 - offsetY / height;

  //   }
  //   return K;
  // }
  // rewind(event) {
  //   if (inRange(event)) {
  //     return player.duration * getCoefficient(event);
  //   }
  // }
}

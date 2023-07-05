export class Display {
  controlsEl: HTMLDivElement;
  progressEl: HTMLDivElement;
  sliderEl: HTMLDivElement;
  currentTimeEl: HTMLSpanElement;
  totalTimeEl: HTMLSpanElement;
  currentlyDragged: boolean;
  constructor() {
    this.controlsEl = document.querySelector("[js-controls]");
    this.progressEl = document.querySelector("[js-progress]");
    this.sliderEl = document.querySelectorAll("[js-slider]");
    this.currentTimeEl = document.querySelector("[js-current-time]");
    this.totalTimeEl = document.querySelector("[js-total-time]");
    this.currentlyDragged = false;
  }
  updateProgress(currentTime: number, duration: number) {
    console.log(duration);
    var current = currentTime;
    var percent = (current / duration) * 100;
    this.progressEl.style.width = percent + "%";

    this.currentTimeEl.textContent = this.formatTime(current);
  }
  formatTime(time: number) {
    var min = Math.floor(time / 60);
    var sec = Math.floor(time % 60);
    return min + ":" + (sec < 10 ? "0" + sec : sec);
  }
  loadDisplay(duration: number) {
    this.totalTimeEl.textContent = this.formatTime(duration);
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

export type TDisplay = typeof Display;

import { audioPlayer } from "./audioPlayer";

export class Button {
  audio: any;
  element: any;
  parent: any;
  constructor(filePath) {
    this.audio = filePath;
    this.parent = document.querySelector("[pads-row]");
    this.createElement();
    this.initListerners();
  }
  createElement() {
    const element = document.createElement("button");
    const elementInner = document.createElement("div");
    element.classList.add("beat-button");
    elementInner.classList.add("beat-button__inner");
    element.append(elementInner);
    this.element = element;
    this.parent.append(element);
  }
  initListerners() {
    this.element.addEventListener("click", () => {
      audioPlayer.playTrack(this.audio);
    });
  }
}

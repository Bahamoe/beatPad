import { audioPlayer } from "./audioPlayer";
import { createButton } from "./helpers";
import { keyCodeLetter } from "./keyCodes";

export class Button {
  audio: any;
  element: any;
  parent: any;
  keyCode: string;
  constructor(audioFile, keyCode: string) {
    this.audio = audioFile;
    this.keyCode = keyCode;
    this.parent = document.querySelector("[js-pads-row]");
    this.createElement();
    this.initListerners();
  }
  createElement() {
    const button = createButton(keyCodeLetter[this.keyCode]);
    this.element = button;
    this.parent.append(button);
  }
  initListerners() {
    this.element.addEventListener("click", () => {
      audioPlayer.loadNewTrack(this.audio);
      this.element.blur();
    });
    window.addEventListener("keydown", (event) => {
      if (event.code === this.keyCode) {
        audioPlayer.loadNewTrack(this.audio);
      }
    });
  }
}

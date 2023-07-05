import { Display, TDisplay } from "./display";
import { KEY_CODES, getDurationStep, isDigit } from "./keyCodes";

class AudioPlayer {
  audioPlayer: HTMLAudioElement;
  display;
  constructor() {
    this.audioPlayer = document.querySelector("[js-audio-player]");
    this.display = new Display();
    this.initalizeListerners();
  }
  initalizeListerners() {
    // window.addEventListener('mousedown', function(event) {

    //   if(!isDraggable(event.target)) return false;

    //   currentlyDragged = event.target;
    //   let handleMethod = currentlyDragged.dataset.method;

    //   this.addEventListener('mousemove', window[handleMethod], false);

    //   window.addEventListener('mouseup', () => {
    //     currentlyDragged = false;
    //     window.removeEventListener('mousemove', window[handleMethod], false);
    //   }, false);
    // });
    window.addEventListener("keydown", (event) => {
      this.handleKeyboardInput(event.code, event.key);
      // console.log("[KEY]: ", event.key);
      // console.log("[KEY_CODE]: ", event.keyCode);
      // console.log("[CODE]: ", event.code);
      // console.log("---------");
    });

    this.audioPlayer.addEventListener("timeupdate", () => {
      this.display.updateProgress(
        this.audioPlayer.currentTime,
        this.audioPlayer.duration
      );
    });
    this.audioPlayer.addEventListener("loadedmetadata", () => {
      this.display.loadDisplay(this.audioPlayer.duration);
    });
    this.audioPlayer.addEventListener("loadeddata", () => {
      this.audioPlayer.play();
    });
    this.audioPlayer.addEventListener("ended", () => {
      this.audioPlayer.currentTime = 0;
    });

    // window.addEventListener('resize', directionAware);
  }
  pause() {
    if (!this.audioPlayer.paused) {
      this.audioPlayer.pause();
    }
  }
  loadNewTrack(audioFile: string) {
    this.pause();
    if (audioFile !== this.audioPlayer.currentSrc) {
      this.audioPlayer.src = audioFile;
      this.audioPlayer.load();
    } else {
      this.audioPlayer.currentTime = 0;
      this.audioPlayer.play();
    }
  }
  playPauseToggle() {
    if (this.audioPlayer.paused) {
      this.audioPlayer.play();
    } else {
      this.audioPlayer.pause();
    }
  }
  get step() {
    return this.audioPlayer.duration * 0.1;
  }
  forwardJump() {
    const newCurrentTime = this.audioPlayer.currentTime + this.step;
    if (newCurrentTime > this.audioPlayer.duration) {
      this.audioPlayer.currentTime = 0;
    } else {
      this.audioPlayer.currentTime = newCurrentTime;
    }
  }
  backwardsJump() {
    const newCurrentTime = this.audioPlayer.currentTime - this.step;
    console.log({ newCurrentTime });
    if (newCurrentTime < 0) {
      this.audioPlayer.currentTime = 0;
    } else {
      this.audioPlayer.currentTime = newCurrentTime;
    }
  }
  handleKeyboardInput = (code: string, key: string) => {
    if (isDigit(code)) {
      this.audioPlayer.currentTime = getDurationStep(
        key,
        this.audioPlayer.duration
      );
    } else {
      switch (code) {
        case KEY_CODES.SPACE:
          this.playPauseToggle();
          break;
        case KEY_CODES.ARROW_LEFT:
          this.backwardsJump();
          break;
        case KEY_CODES.ARROW_RIGHT:
          this.forwardJump();
          break;

        default:
          break;
      }
    }
  };
}
export const audioPlayer = new AudioPlayer();

import { Display, TDisplay } from "./display";

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
  get duration() {
    return this.audioPlayer.duration;
  }
  get currentTime() {
    return this.audioPlayer.currentTime;
  }
}
export const audioPlayer = new AudioPlayer();

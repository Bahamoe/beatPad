class AudioPlayer {
  audioPlayer: HTMLAudioElement;
  constructor() {
    this.audioPlayer = new Audio();
  }
  initalize() {
    this.audioPlayer = document.querySelector("[audio-player]");
  }
  play() {
    this.audioPlayer.play();
  }
  pause() {
    if (!this.audioPlayer.paused) {
      this.audioPlayer.pause();
    }
  }
  playTrack(audioFile: string) {
    this.pause();
    if (audioFile !== this.audioPlayer.currentSrc) {
      this.audioPlayer.src = audioFile;
      this.play();
    } else {
      this.audioPlayer.currentTime = 0;
      this.play();
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

import { constructElements } from "./helpers";
import { Modes } from "./modes";
import { Timeline } from "./timeline";

export class Display {
  rootElement: HTMLElement;
  timeline;
  modes;
  currentlyDragged: boolean;
  constructor() {
    this.rootElement = document.querySelector("[js-display]");
    this.timeline = new Timeline();
    this.modes = new Modes();
    this.initalizeDOMNodes();
  }
  initalizeDOMNodes() {
    this.rootElement.append(this.timeline.rootElement);
    this.rootElement.append(this.modes.rootElement);
  }
}
export type TDisplay = typeof Display;

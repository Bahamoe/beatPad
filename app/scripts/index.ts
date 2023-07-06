import { Button } from "./button";
import { audioFiles } from "./audio";

audioFiles.forEach((audio) => {
  new Button(audio.file, audio.keyCode);
});

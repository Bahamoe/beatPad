import { Button } from "./button";
import { audioFiles } from "./audio";

audioFiles.forEach((file) => {
  new Button(file);
});

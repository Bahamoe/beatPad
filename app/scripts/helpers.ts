import { keyCodeLetter } from "./keyCodes";

export const createButton = (text: string) => {
  const buttonEl = document.createElement("button");
  const buttonElInner = document.createElement("div");
  const buttonText = document.createElement("span");
  buttonText.classList.add("text", "text--glow");
  buttonText.innerText = text;
  buttonElInner.classList.add("btn__inner");
  buttonElInner.append(buttonText);
  buttonEl.classList.add("btn");
  buttonEl.append(buttonElInner);
  return buttonEl;
};

type TCreateElement = {
  elementType: string;
  classNames?: string[];
  attributes?: Record<string, string>;
  text?: string;
  children?: HTMLElement[];
};

export const createElement = ({
  elementType,
  classNames,
  attributes,
  text,
  children,
}: TCreateElement) => {
  const element = document.createElement(elementType);
  if (classNames) {
    element.classList.add(...classNames);
  }
  if (attributes) {
    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  }
  if (text) {
    element.innerHTML = text;
  }
  if (children) {
    children.forEach((child) => {
      element.append(child);
    });
  }
  return element;
};

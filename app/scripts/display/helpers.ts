import { createElement } from "../helpers";

export const constructElements = () => {
  const pinElement = createElement({
    elementType: "div",
    classNames: ["pin"],
    attributes: { "data-method": "rewind", id: "progress-pin" },
  });
  const progressElement = createElement({
    elementType: "div",
    classNames: ["progress"],
    attributes: { "js-progress": "" },
    children: [pinElement],
  });
  const sliderElement = createElement({
    elementType: "div",
    classNames: ["slider"],
    attributes: { "data-direction": "horizontal", "js-slider": "" },
    children: [progressElement],
  });

  const currentTimeElement = createElement({
    elementType: "span",
    classNames: ["current-time", "text", "text--glow"],
    attributes: { "js-current-time": "" },
    text: "0:00",
  });
  const totalTimeElement = createElement({
    elementType: "span",
    classNames: ["total-time", "text", "text--glow"],
    attributes: { "js-total-time": "" },
    text: "0:00",
  });

  const durationElement = createElement({
    elementType: "div",
    classNames: ["display__duration"],
    attributes: { "js-duration": "" },
    children: [currentTimeElement, sliderElement, totalTimeElement],
  });

  return {
    pinElement,
    progressElement,
    sliderElement,
    currentTimeElement,
    totalTimeElement,
    durationElement,
  };
};

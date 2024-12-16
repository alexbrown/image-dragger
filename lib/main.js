import { createStyles } from "./styles";
import { createImageContainer } from "./images";
import { createControlsContainer } from "./controls";
import { createSlider } from "./slider";

/**
 * Gets the DOM element the user is trying to attach to
 * @return HTMLElement
 */
const getContainerElement = (selector) => {
  const element = document.querySelector(selector);
  if (!element) {
    throw new Error(
      `ImageDragger - Unable to find element with selector: ${id}`,
    );
  }
  return element;
};

/**
 * Creates the container element that the slider will live in
 * @return HTMLElement
 */
const createContainerElement = () => {
  const container = document.createElement("div");
  container.className = "ImageDragger__slider-container";
  return container;
};

/**
 * The main object the user interacts with to configure the image dragger
 * @return object
 */
export const ImageDragger = {
  create: (id, options) => {
    const element = getContainerElement(id);
    createStyles();
    const container = createContainerElement();
    const imageContainer = createImageContainer(options);
    container.appendChild(imageContainer);
    container.appendChild(createSlider(container));
    container.appendChild(createControlsContainer());
    element.appendChild(container);
  },
};

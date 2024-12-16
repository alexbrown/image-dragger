/**
 * Creates an image DOM element
 * @return HTMLElement
 */
const createImage = (src) => {
  const image = document.createElement("img");
  image.className = "ImageDragger__image";
  image.src = src;
  return image;
};

/**
 * Creates a container for a left and right image
 * @return HTMLElement
 */
export const createImageContainer = (options) => {
  const container = document.createElement("div");
  container.className = "ImageDragger__image-container";
  const leftImage = createImage(options.leftImage);
  leftImage.classList.add("ImageDragger__left");
  container.appendChild(leftImage);
  container.appendChild(createImage(options.rightImage));
  return container;
};

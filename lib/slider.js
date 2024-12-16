/*
 * Creates the slider input that overlays over the image
 * @return HTMLElement
 */
export const createSlider = (container) => {
  const slider = document.createElement("input");
  slider.type = "range";
  slider.min = 0;
  slider.max = 100;
  slider.step = 0.01;
  slider.value = 50;
  slider.ariaLabel = "Percentage of before photo shown";
  slider.className = "ImageDragger__slider";

  slider.addEventListener("input", (e) => {
    container.style.setProperty(
      "--image-dragger-percentage",
      e.target.value + "%",
    );
  });
  return slider;
};

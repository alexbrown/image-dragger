/**
 * Creates a container div for the controls (line and handle)
 * @return HTMLElement
 */
export const createControlsContainer = () => {
  const controlContainer = document.createElement("div");
  controlContainer.className = "ImageDragger__control-container";
  controlContainer.appendChild(createSliderHandle());
  controlContainer.appendChild(createSliderLine());
  return controlContainer;
};

/**
 * Create the handle element that a user can drag
 * @return HTMLElement
 */
const createSliderHandle = () => {
  const handle = document.createElement("div");
  handle.innerHTML = `
    <svg fill="currentColor" height="19" viewBox="0 0 357.1 1000" width="19" xmlns="http://www.w3.org/2000/svg" class="arrow"><path d="M350 304q0 7-6 12L125 536l219 219q6 6 6 13t-6 13l-28 28q-5 5-12 5t-13-5L31 548q-6-5-6-12t6-13l260-260q5-6 13-6t12 6l28 28q6 5 6 13z"></path></svg>
    <svg fill="currentColor" height="19" viewBox="0 0 357.1 1000" width="19" xmlns="http://www.w3.org/2000/svg" class="arrow arrowRight"><path d="M332 536q0 7-5 12L66 809q-5 5-12 5t-13-5l-28-28q-6-6-6-13t6-13l219-219L13 316q-6-5-6-12t6-13l28-28q5-6 13-6t12 6l261 260q5 5 5 13z"></path></svg>
  `;
  handle.className = "ImageDragger__slider-handle";
  return handle;
};

/**
 * Creates the line the follows the edge of the left image
 * @return HTMLElement
 */
const createSliderLine = () => {
  const line = document.createElement("div");
  line.ariaHidden = true;
  line.className = "ImageDragger__slider-line";
  return line;
};

const styles = `
    .ImageDragger__slider-container {
      --image-dragger-percentage: 50%;
      height: 100%;
      position: relative;
      overflow: hidden;
    }

    .ImageDragger__image-container {
      height: 100%;
      position:relative; 
    }

    .ImageDragger__left {
      clip-path: polygon(0px 0px, var(--image-dragger-percentage) 0px, var(--image-dragger-percentage) 100%, 0px 100%);
    }
    
    .ImageDragger__image {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
      inset: 0;
    }

    .ImageDragger__slider-line {
      position: absolute;
      inset: 0;
      width: 5px;
      height: 100%;
      background-color: rgba(255,255,255,.9);
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      left:20px;
      pointer-events: none;
    }

    .ImageDragger__slider {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0;
      cursor: ew-resize;
    }

    .ImageDragger__slider-handle {
      position:absolute;
      top: 50%;
      left: -5px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: none;
      pointer-events: none;
      width: 50px;
      height: 50px;
      background: white;
      outline: 8px solid rgba(255,255,255,.5);
    }

    .ImageDragger__control-container {
      position: absolute;
      cursor: ew-resize;
      pointer-events: none;
      width: 50px;
      left: calc(var(--image-dragger-percentage) - 18px);
      top: 0;
      bottom: 0;
    }
`;

/*
 * Adds a style tag to the head of the HTML document in order to add the required styles for the ImageDragger library
 * @return void
 */
export const createStyles = () => {
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = styles;
  document.getElementsByTagName("head")[0].appendChild(style);
};

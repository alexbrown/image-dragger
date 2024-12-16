# Image Dragger
A simple, lightweight way to add an image comparison tool to your website/app

![](https://raw.githubusercontent.com/alexbrown/image-dragger/c1c173fd4b39b1c4d1fcba908d7deaf630d3d588/demo/images/image-dragger.gif)

## Usage
```
ImageDragger.create("#car", {
  leftImage: "./demo/images/car.jpg",
  rightImage: "./demo/images/car-bg-removed.png",
});
```
## Parameters
| Parameter          | Description                                                           |
---------------------| ----------------------------------------------------------------------|
| `selector `          | Selector of where you would like to mount the slider                  |
| `options.leftImage`  | URL of the image you would like to be on the left side of the slider  |
| `options.rightImage` | URL of the image you would like to be on the right side of the slider |

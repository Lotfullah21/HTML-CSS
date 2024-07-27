## background-image: url("path")

It adds an image instead of a color as background of our element.

## background-repeat: no-repeat;

By default the value for this property is set to `repeat`, which means if the image's size is smaller than the viewport screen, the image will be repeated.

```css
background-repeat: repeat;
```

```css
background-repeat: no-repeat;
background-repeat: round;
```

`round` value means keep stretching the image until you get a full space for the second image, then add that image.

## background-size

#### 1. Cover

```css
div {
	background-size: cover;
}
```

Cover the whole `div` regardless of the `div` and `img` size.
It affects the pixel values and distort the quality of the image if its size is small.

#### 2. Contain

```css
div {
	background-size: cover;
}
```

It keeps the ratio, if it does not fit, add another one, but do not distort the quality of the image.

## background-position

It moves the position of the image relative to the element or the `div` it lives on.

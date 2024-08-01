## Text effects:

Different properties can be applied related box:

#### 1. ellipses:

It represent the box that is cut because of over flow by `...`

#### box-shadow:

This adds shadow to a box.

##### Syntax:

```bash

selector{

    box-shadow: X-Coordinate Y-Coordinate Blur-radius Shadow-color
    X-Coordinate(px): Horizontal shadow.
    Y-Coordinate(px): Vertical shadow.

}
```

If coordinates values are negative or zero, it means the shadow is directly behind centered behind the box.

If it has positive values, shadow might appear on different places.

Multiple shadows can be stacked on top of each other by adding different shadow values separated by commas.

```css
h1 {
	box-shadow: 0 0 20px rgb(249, 120, 120), 0 0 12px red;
}

p {
	box-shadow: 0 0 10px rgb(0, 205, 0);
}
```

Try out different values and see the effects.

<h2><a href="https://www.cssmatic.com/box-shadow">Shadow-Generator</a></h2>

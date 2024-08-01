# 1. transform:translate()

It allows us to have apply different transformation to our elements.

We are having different functions and for each function we need to pass different values.

```css
transform:translate()
transform:rotate()
transform:scale()
transform:skew()
```

### 1. transform:translateX(50px)

It moves the box in the horizontal direction to the right if the value is positive and to the left side if the value is negative.

```css
div {
	width: 200px;
	height: 200px;
	display: inline-block;
}
```

```css
.one {
	transform: translateX(40px);
}
```

### 2. transform:translateY(90px)

It moves the box in the vertical direction, if the value is positive, then to the bottom and if negative, to the top.

```css
.one {
	transform: translateY(-40px);
}
```

### 3. transform:translate(50px, 90px)

We can use the below function to move the box in the horizontal and vertical direction.

```css
.one {
	transform: translate(50px, 90px);
}
```

It says move the box `50x` to the right and `90px` to the bottom.

## Note:

When we use `%` unit here, in fact it takes reference the original size of the `div` box.

For instance, if we say `translateX(50%)` and the size of the box is `200px`, which `50%` of `200` is `100`, hence we move the box `100px` to the right.

Same will be applied to all other transform functions.

If we use unit less units, then that also counts as percentage.
For instance instead of `50%`, we use `0.5`.

# 2. transform:scale()

It it increases the size of the element in any direction we specify just as translate function.

```css
.one {
	transform: scale(50px, 90px);
}
```

# 3. transform:rotate()

It rotates our box in three directions, `x, y, z`
The units you can use with rotate() are degrees (deg), gradians (grad), radians (rad), and turns (turn).

```css
.one {
	transform: rotate(50deg, 90deg);
}
```

# 3. transform:skew()

It skew our box in three directions, `x, y`
The units you can use with skew() are degrees (deg), gradians (grad), radians (rad), and turns (turn). Here’s a brief explanation of each:

```css
.one {
	transform: skew(50deg, 90deg);
}
```

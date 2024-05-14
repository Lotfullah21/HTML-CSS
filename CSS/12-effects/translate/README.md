## transform:

It modifies the position of an element, like its scale and angle.

````css
element {
	transform: value;
}
```
The values can be:
1. scale(value(numbers)) which increase or decrease the size of an element.
2. rotate(value(numbers followed by deg(90deg))): It rotates our element.
3. translate(value in px): It moves the element along x,y, or z axis.

## transition:

To create the motion to our transform property and this done by slowing or speeding the transformation, transition is used.


```css
element {
/* Basic Syntax */
transition: property duration timing-function delay;
/* Example */
transition: width 0.3s ease-in-out 0s;
}
```

Transition has four properties:

- transition-property: the css property we want apply the transition to, it can be one, more separated by commas or just simply use `all` to apply for all properties.
- transition-duration
- transition-timing-function
- transition-delay`

For instance,

```css
.box-1 {
	background-color: rgb(1, 43, 29);
	transition: all 2s linear;
}
.box-1:hover {
	transform: skew(90deg);
}
```

Any transform property added to box-1 will happen in span of 2 seconds.

Here, once the user hover over box-1, it skews by 90 degree.
````

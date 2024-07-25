## transform:

It modifies the position of an element, like its scale and angle.

## transition:

To create the motion to our transform property and this done by slowing or speeding the transformation, transition is used.

### Syntaxes:

```css
element {
	transform: value;
}
```

```css
element {
	transition: value;
}
```

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

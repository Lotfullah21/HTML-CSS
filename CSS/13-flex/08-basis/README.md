### flex-basis:

No matter how much is my parent's width or height, I WANT THIS BASE FOR EACH INDIVIDUAL ELEMENT.

```css
/* short cut */
/* flex:flex-grow flex-shrink flex-basis  */
box {
	flex: 1 1 300px;
}
```

The flex-basis sets the initial size of the container. and together they define the rigidity or flexibility and dynamism you want to add to the flexbox.

flex-basis property can be used to set the initial main size of a flex item. The main size is defined by the flex-direction property:

If flex-direction is set to row or row-reverse, the flex-basis property sets the width of the flex item.
If flex-direction is set to column or column-reverse, the flex-basis property sets the height of the flex item.

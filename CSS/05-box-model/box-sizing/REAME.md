## Box-sizing

When adding padding to a box element, the size of that box gets bigger, but if we don't want the padding to affect our box size, we can add `box-sizing:border-box`, After adding this property, our box will not get bigger because of the added padding, but instead the content inside the box might get smaller.

## Not

When you add box-sizing: border-box to a box element, the padding and border are included within the specified width and height of the box, rather than expanding the box's dimensions. If padding is twice as the height/width of original box, the padding effects will be visible.

For values smaller than `padding<= 2*original`, the size of the box won't increase.

The content area inside box-2 will be calculated as `200px - 2 \* 200px` (padding) which results in a negative content area. Since it can't have negative dimensions, the content area will essentially collapse.

The general trick here is to add in universal selector.

```css
* {
	box-sizing: border-box;
}
```

to have a stable layout.

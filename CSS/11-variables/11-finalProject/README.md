In CSS, the inset property is a shorthand property that combines the top, right, bottom, and left properties to specify the placement of an element within its containing element. It's commonly used to set the positioning of absolutely or fixed positioned elements.

```css
element {
	inset: top right bottom left;
}
```

Here, top, right, bottom, and left are values representing the distance of the element from the respective edges of its containing element. Each value can be specified in pixels, em units, percentages, etc.

```css
element {
	inset: 0 0 0 0;
}
```

can be written as

```css
element {
	inset: 0;
}
```

which in turn cover the entire space of its parent

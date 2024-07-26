# calc()

The calc() function in CSS allows us to perform calculations to determine CSS property values. This can be very useful for combining different units, creating responsive designs, or adjusting sizes dynamically.

For instance, when we want to set our banner height, or viewport and many other areas.

```css
.navbar {
	height: 30px;
}

.hero {
	height: calc(100vh - 30px);
}
```

Now, using calc function our here takes the whole heighth of the viewport except the `30px` from `navbar.`

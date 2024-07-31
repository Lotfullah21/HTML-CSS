## sticky

It toggles between position sticky and position fixed.

It will be relative until we reach to value and after that value, it will be fixed and sticky.

that value can be set by properties: `top, bottom, left, right`.

```css
.navbar {
	position: sticky;
	top: 0;
	background: black;
	color: white;
	font-size: 2rem;
	width: 100vw;
}
```

By above properties, the `navbar` will be relative until the scrolling distance from the top becomes zero.

```css
.navbar {
	position: sticky;
	top: 30px;
	background: black;
	color: white;
	font-size: 2rem;
	width: 100vw;
}
```

By above properties, the `navbar` will be in relative position until the scrolling(viewport) distance from the top becomes 30px and then it will be fixed and sticky.

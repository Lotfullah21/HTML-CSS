<h3>fr: fraction of available space</h3>

<h3>Grid templates-Normal</h3>

```css
.container {
	display: grid;
	grid-template-columns: 1fr 1fr 0.3fr;
	grid-template-rows: 2fr 1fr;
	column-gap: 10px;
	row-gap: 8px;
	grid-gap: 30px;
	gap: 32px 10px;
	gap: 40px;
	border: 4px solid red;
}
```

<h3>Grid shorthand</h3>

```css
grid-template: rows/columns;
```

```css
.container {
	display: grid;
	grid-template: 1fr 1fr 0.3fr/2fr 1fr;
	column-gap: 10px;
	row-gap: 8px;
	grid-gap: 30px;
	gap: 32px 10px;
	gap: 40px;
	border: 4px solid red;
}
```

## Keyboard tips:

<h4>ALT + mouse click to select multiple selectors in html.</h4>
<h4>ALT + L + O to open in browser.</h4>

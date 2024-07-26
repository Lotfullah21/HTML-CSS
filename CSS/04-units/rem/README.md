## rem

it depends on the root, not the parent level elements
the root either can be changed or specified through custom css which the specification should be added to the `html` selector or through browser settings by user.

The rem unit is relative to the root element's font size, which is usually set on the html element. If no specific font size is set for the root element, the browser's default font size is used, typically 16px.

```html
<div class="parent">
	<h1 class="child">Hello world</h1>
</div>

<style>
	html {
		font-size: 16px; /* This is the default if not specified */
	}
	.child {
		font-size: 2rem; /* 2rem = 2 * 16px = 32px */
	}
</style>
```

```css
html {
	font-size: 30px;
	width: 400px;
	color: wheat;
	background: black;
	border: 2px solid red;
}

.child {
	font-size: 2rem;
}
```

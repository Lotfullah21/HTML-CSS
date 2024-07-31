## ::before ::after

These are pseudo-element that creates contents before and after the content of an element without using html.

```css
div::before {
	content: "hello, I am from before ";
}
```

`content` is necessary for creating the content.
For instance image is not a content like `h1, h2, p`, we have to wrap it inside a `div` and add the content before or after that div.

for empty `div` DO NOT FORGET `height && width` property.

### note:

pseudo element does not work with image contents.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="./style.css" />
		<title>::before::after</title>
	</head>
	<body>
		<div class="one">first div</div>
		<div class="two">first div</div>
	</body>
</html>
```

```css
div::before {
	content: "hello, I am from before ";
	color: red;
	font-size: 3rem;
	display: block;
	background: green;
}
```

## Note:

The image is itself a content, we cannot add content before or after it,
we need to wrap it inside a div and add that content based on that div.

```css
! Wrong img::before {
	content: "hello";
}
```

For now, just forget about position property.

# Tip

```html
<div class="card"><img src="../../images/cal.jpg" /></div>
```

```css
.card {
	width: 30vw;
	height: 20vh;
	margin: 90px auto;
	margin-top: 240px;
	position: relative;
}
```

adding `display:block and width:100%` is crucial for having a responsive image inside a `div` and to avoid any unnecessary gaps inside the `div`.

```css
img {
	width: 100%;
	display: block;
}
```

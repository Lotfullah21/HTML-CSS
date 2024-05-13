## ::before ::after

These are pseudo-element that creates contents before and after the content of an element without using html.

```css
div::before {
	content: "hello, I am from before ";
}
```

`content` is necessary for creating the content if it is an empty block.

this will add this content before each div element.

for empty `div` DO not forget `height && width` property.

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

note down that the image is itself a content, we cannot add content before or after it,
we need to wrap it inside a div and add that content based on that div.

```css
! Wrong img::before {
	content: "hell";
}
```

# Document flow:

The web browser normal way of calculating the position of an element is known is document flow.

All HTML elements are categorized in one of two different categories:

## 1. Block Level

It occupies the full horizontal width of its parent element and vertical height of the content.
Each block level elements starts a new line.

Multiple block level elements will stack on top of each other.
Examples of them are `<div>,<headings>,<p>,<form>`

## 2.Inline Level

Only occupies the width and height of the content and necessarily does not start a new line and that is why it is called inline.

Multiple inline level elements creates a row elements.

Examples of them are `<spa>,<img>,<input>,<label>,<i>,<a>,<em>`.

By changing the `display` property value to `inline` or `block`, we can change the natural level of an element.

The two most common ways to `left` and `right` align elements are to use the float property and the position property.

The position property has several value options that impact how the element displays in the document flow.

The float property sets an element's position relative to the text content within a parent element. Text will wrap around the element

```css
element{
    display:block; if the element is inline level.
}
```

## Centering

### 1. Block level elements

To center the contents, we can use `text-align:center` property, but to center the whole element, add a width to the element and use this property.

```css
element {
	width: 300px;
	margin: 4rem auto;
}
```

## display:hidden

hides the element, but still preserve the space.

## display: none

removes the element and does not keep the space.

```css
.box {
	display: none;
	visibility: hidden;
	opacity: 0;
}
```

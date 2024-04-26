### Document flow:

The web browser normal way of calculating the position of an element is known is document flow.

All HTML elements are categorized in one of two different categories:

#### 1. Block Level

It occupies the full horizontal width of its parent element and vertical height of the content.
Each block level elements starts a new line.

Multiple block level elements will stack on top of each other.
Examples of them are `<div>,<headings>,<p>,<form>`

#### 2.Inline Level

Only occupies the width and height of the content and necessarily does not start a new line and that is why it is called inline.

Multiple inline level elements creates a row elements.

Examples of them are `<spa>,<img>,<input>,<label>,<i>,<a>,<em>`.

By changing the `display` property value to `inline` or `block`, we can change the natural level of an element.

```css
element{
    display:block; if the element is inline level.
}
```

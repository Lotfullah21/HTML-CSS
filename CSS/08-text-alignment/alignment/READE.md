#### Text Alignment:

It specifies where the text should appear related to their parents.

Text alignment can be set to four different values which are left, right, center and justify.

`text-align:justify`: each line should have same width if there is enough space.
`text-align:center`: text should be displayed in the center.
`text-align:right`: text should start from, useful for languages that are right-to-left like persian.
`text-align:left`: useful for languages that are left-to-right.

#### HTML Element Alignment:

To align HTML elements related to body or their parents, we need to consider box modeling(padding, margin, content, border) and document flow (inline,block, inline-block).

```css
element {
  margin: auto;
}
```

`margin:auto`: It tells the browser that calculate the margin based on space available.

```css
.parent {
  border: 2px solid rgb(173, 133, 133);
}

.child {
  border: 2px solid rgb(0, 47, 128);
  /* Take only 50% of the parent width */
  width: 50%;
  padding: 18px;
  margin: auto;
}
```

From the above example, it can be observed that children takes `50%` of parents width and full height.

So, it means margin cannot be there on top and bottom side, give an equal margin on left and right(25% on each side).

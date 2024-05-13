## attribute selector:

It matches the attribute nama or the value of an element or elements.

element[attribute or attribute=value]{

}

It says for this element with this attribute like having an `id` or a `class`, apply this rule.

```css
h2[class="heading"] {
	text-transform: uppercase;
	color: red;
}
```

## nth-of-type and nth-of-child selectors:

It applies a style to nth child of a parent. for instance inside a `div` if we have multiple elements or inside a `ul`, we have multiple `li` children.

```css
element:nth-of-type(n) {
	property: value;
}
```

```css
element:nth-chile(n) {
	property: value;
}
```

```html

```

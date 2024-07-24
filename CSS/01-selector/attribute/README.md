## attribute selector:

It matches the attribute nama or the value of an element or elements.

element[attribute or attribute=value]{

}

It says: for this element with this attribute (`id` or a `class`), apply this rule.

```css
h2[class="heading"] {
	text-transform: uppercase;
	color: red;
}
```

The above rule specifically targets h2 elements that have a class attribute with the exact value heading-2.

```css
.heading-2 {
	text-transform: underline;
}
```

The above rule targets all elements with the class heading-2, regardless of their tag (not limited to h2).

## nth-of-type and nth-of-child selectors:

It applies a style to nth child of a parent. for instance inside a `div` if we have multiple elements or inside a `ul`, we have multiple `li` children.

```css
element:nth-of-type(n) {
	property: value;
}
```

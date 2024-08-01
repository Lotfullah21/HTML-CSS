## Media queries

When designing a new page, always consider mobile with the highest priority.
If you want to change the property of any element for other kinds of devices, then use `media-query`

It has two main keywords

## Min-width

It applies the styles starting from the min-width

```css
@media screen and (min-width: 400px) {
	body {
		font-size: large;
	}
}
```

It says starting from 400px, make the font-size large.

## Max-width

It applies the styling up to the max width

```css
@media screen and (max-width: 300px) {
	body {
		text-align: center;
	}
}
```

Up to width size of `200px`, apply the property of `text-align-center`.

## Note:

If you do not change or apply different styles from different media queries, the styles applied earlier or for smaller width screen will be applied.

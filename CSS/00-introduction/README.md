# Debugging:

CSS does not handle the errors, if any errors happens it simply ignores the part it does not understand.

```css
h1 {
	font-size: 2rem;
	pading: 2rem
	font-size: 4rem;
	font-size: 2rem;
}
```

CSS from above snippet will ignore `padding: 2rem; font-size: 2rem;` and starts applying from `font-size` property.

One of the extensions that can help in this situation, by showing the error the lines where the error occurs.
<a href="https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint">styleint</a>

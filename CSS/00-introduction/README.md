### Cascading Style Sheets (CSS):

CSS is a style sheet language that is used to describe the look and layout of a web page that is written in HTML.
It gives control over color, size, positioning, fonts, spacing and many more.
It separates the content from style and allow us to change the appearance of a website without changing its structure.

### Debugging:

CSS does not handle the errors, if any errors happens it simply ignores the part it does not understand.

```css
h1 {
	font-size: 2rem;
	pading: 2rem
	font-size: 2rem;
	font-size: 2rem;
}
```

CSS from above snipper will ignore `pading: 2rem; font-size: 2rem;` and starts applying from `font-size` property.

One of the extensions that can help in this situation, by showing the error the lines where the error occurs.
<a href="https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint">styleint</a>

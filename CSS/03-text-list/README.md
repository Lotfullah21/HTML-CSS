#### Font:

A font is a collection of text characters written in a specific style and size.

```css
h1 {
	font-family: "Times New Roman", Times, serif;
}
```

`Times` and `serif` is not enclosed in quotes because it's a single word and doesn't contain any special characters.

This will go in order:

- "Times New Roman": This is the preferred font. If the browser supports "Times New Roman", it will be used.
- Times: If "Times New Roman" is not available, the browser will attempt to use the generic Times font family.
- serif: If neither "Times New Roman" nor Times is available, the browser will fall back to a generic serif font family. This is a broad category of serif fonts that are commonly available across different platforms.

If none of the specified fonts are available in the user's system or supported by the browser, the browser will resort to its default font for rendering text.

##### font-size:

We can specify the size in various units such as pixels (px), points (pt), ems (em), or percentages (%).

```css
h1 {
	font-family: "Times New Roman", Times, serif;
	font-size: 16px;
}
```

Each element has its own default font size, but we can change it by using `font-size` property.

<h1> elements (level 1 headings) typically have a larger default font size compared to other headings or paragraphs.
<h2>, <h3>, <h4>, <h5>, and <h6> elements have progressively smaller default font sizes, with <h6> being the smallest.
Paragraphs (<p>), lists (<ul>, <ol>, <li>), and other text-containing elements like <div> have their own default font sizes.

##### Text Transformation:

The most commonly used values for the text-transform property are: uppercase, lowercase, capitalize and none. The default value used is none, which means the text displays as it was written in the HTML document.

```css
h1 {
	text-transform: lowercase;
}
```

All h1 elements will be lower cased

##### Text Decoration:

It is used to add more styles to the texts.

```css
h1 {
	text-decoration: underline;
}
```

Adds an underline for h1 tag.

```css
h1 {
	text-decoration-line: underline;
	text-decoration-color: green;
	text-decoration-style: solid;
	text-decoration-thickness: 3px;
}
```

Lets shorten the above properties and write in one line.

```css
h1 {
	text-decoration: underline green solid 3px;
}
```

## Special Characters

To get special characters, we need to use `&` followed by the type of special characters we want to have.

```html
<h1>copyright &copy;</h1>
```

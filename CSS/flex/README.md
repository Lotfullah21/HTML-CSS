## Flex:

flex box is a type of container that and can easily scale over larger web applications and also it gives more control for controlling the elements inside a container.

The main idea behind the flex layout is to give the container the ability to alter its items’ width/height (and order) to best fill the available space (mostly to accommodate to all kind of display devices and screen sizes). A flex container expands items to fill available free space or shrinks them to prevent overflow.(1)

<img src="./assets/flex.svg">

<a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-basics-and-terminology" targe="_blank">image source</a>

Because, The elements inside can grow, shrink unlike the block and inline block elements which does not have much control over the elements inside.

Flex box is a single-dimensional, which we means we can either align it along the vertical or horizontal axis.

When the elements are aligned along the rows, the horizontal-axis is called the main axis and vertical axis is called cross-axis.

If the row is the main axis, the items start from top left and continues until there is no space and starts in a new row once reached to the end of the first row.

<a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-basics-and-terminology" targe="_blank">(1)</a>

# Flex Box Properties

<img src="./assets/container.png" alt="container along with its children"
width="360" height="120">

### 1. display

This defines a flex container where are of its children will follow the rules of a flex based parent.

Lets consider the given html file, as it be seen the container class is defined and it has three children and the container here can be a flex container once its display property changes to `flex`.

```html
<body>
	<main>
		<!-- container -->
		<div class="container">
			<!-- Children -->
			<div class="box box-1">item-1</div>
			<div class="box box-2">item-2</div>
			<div class="box box-3">item-3</div>
		</div>
	</main>
</body>
```

```css
.container {
	display: flex;
}
```

If the display is not flex, hwo will it look?

<figure>
<img src="../assets/block.png" alt="description of block level elements" height="220" width="480" />
<figcaption>block level elements without display flex property</figcaption>
</figure>

## 1. flex-direction:

This defines the mains, in another words the way children are going to aligned, either horizontally or vertically.
If it is not mentioned, default value is horizontal from left to right:

Following values are there in `flex-direction`:

- row: default; main axis is horizontal axis from left to right along the mai.
- column: main axis is cross axis from top to bottom which means the elements will be from top to bottom.
- row-reverse: elements are aligned from right to left.
- column-reverse: elements ara aligned from bottom to top.
<figure>
<img src="./assets/container.png" alt="description of row direction" height="120" width="480" />
  <figcaption>flex direction row (default)</figcaption>
  </figure>
  </br>
  <figure>
  <img
  				src="./assets/row-rev.png"
  				alt="flex direction row reverse"
  				height="120"
  				width="480" />
  <figcaption>flex direction row reverse</figcaption>
  </figure></br>
  <figure>
  <img
  				src="./assets/col.png"
  				alt="description of block level elements"
  				height="480"
  				width="140" />
  <figcaption>flex direction column</figcaption>
  </figure></br>
  <figure>
  <img
  	src="./assets/col-rev.png"
  				alt="flex direction reverse column"
  				height="480"
  				width="140" />
  <figcaption>flex direction reverse column</figcaption>
  </figure>

## 2. flex-wrap:

By default flex items tries to stay and fit in one line, but it this property can be changes by using different values for `flex-wrap` property.

```css
.container {
	display: flex;
	flex-wrap: wrap | nowrap | wrap-reverse;
}
```

- `wrap`: Wraps the elements across multiple lines after certain point.
- `nowrap`: Default value and fits all the element across main axis.
- `wrap-reverse`: Wraps the element from bottom to top.

`nowrap` causes overflow which means some of the contents cannot be seen and will move out of normal flow.

<figure>
<img src="./assets/container.png" alt="description of row direction" height="120" width="480" />
<figcaption>flex-wrap: no wrap (default)</figcaption>
</figure> </br>
<figure>
<img src="./assets/row-rev.png" alt="flex direction row reverse" height="120" width="480" />
<figcaption>flex direction row reverse</figcaption>
</figure></br>
<figure>
<img src="./assets/col.png" alt="description of block level elements" height="480" width="140" />
<figcaption>flex direction column</figcaption>
</figure></br>
<figure>
<img src="./assets/col-rev.png" alt="flex direction reverse column" height="480" width="140" />
<figcaption>flex direction reverse column</figcaption>
</figure>

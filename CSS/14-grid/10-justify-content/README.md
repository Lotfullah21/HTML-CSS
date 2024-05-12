## Justify-content

It the container children or grid tracks along the horizontal or column axis.

Note that all movements are done between or for columns, which means that the elements are moving either to the left or right.

By default, it uses `justify-content: start`

Lets study some of its properties:

### 1. start:

It is the property that is by default, all columns are aligned at the beginning.

```css
.container {
	display: grid;
	justify-content: start;
	grid-template-columns: repeat(3, 100px);
	grid-template-rows: repeat(4, 100px);
	min-height: 50vh;
	max-width: 55vw;
	border: 3px solid rgb(3, 1, 0);
}
```

<figure>
<img src="../assets/justify-content/start.png" height="390" width="862" alt="start">
<figcaption><p align="center">justify content property with default value</p><figcaption>
</figure>

### 2. end

It pushes all grid tracks along horizontal axis to the right most side of the container.

```css
.container {
	display: grid;
	justify-content: end;
	grid-template-columns: repeat(3, 100px);
	grid-template-rows: repeat(4, 100px);
	min-height: 50vh;
	max-width: 55vw;
	border: 3px solid rgb(3, 1, 0);
}
```

<figure>
<img src="../assets/justify-content/end.png" height="390" width="862" alt="justify content property with end value">
<figcaption><p align="center">justify content property with start value</p><figcaption>
</figure>

### 3. center:

It aligns all columns to the center of the container along horizontal axis.

```css
.container {
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(3, 100px);
	grid-template-rows: repeat(4, 100px);
	min-height: 50vh;
	max-width: 55vw;
	border: 3px solid rgb(3, 1, 0);
}
```

<figure>
<img src="../assets/justify-content/center.png" height="390" width="862" alt="justify content property with center value">
<figcaption><p align="center">justify content property with center value</p><figcaption>
</figure>

### 4. space-around:

Container's space is evenly distributed between the columns and remaining space is distributed between the border, starting, and ending column.

```css
.container {
	display: grid;
	justify-content: space-around;
	grid-template-columns: repeat(3, 100px);
	grid-template-rows: repeat(4, 100px);
	min-height: 50vh;
	max-width: 55vw;
	border: 3px solid rgb(3, 1, 0);
}
```

<figure>
<img src="../assets/justify-content/around.png" height="390" width="862" alt="justify content property with space-around value">
<figcaption><p align="center">justify content property with space around value</p><figcaption>
</figure>

### 5. space-between:

The container's space is evenly distributed between the columns.

```css
.container {
	display: grid;
	justify-content: space-between;
	grid-template-columns: repeat(3, 100px);
	grid-template-rows: repeat(4, 100px);
	min-height: 50vh;
	max-width: 55vw;
	border: 3px solid rgb(3, 1, 0);
}
```

<figure>
<img src="../assets/justify-content/between.png" height="390" width="862" alt="justify content property with space-between value">
<figcaption><p align="center">justify content property with space-between value</p><figcaption>
</figure>

### 6. space-evenly:

Container's space is evenly distributed between the columns and the starting and ending borders.

```css
.container {
	display: grid;
	justify-content: space-evenly;
	grid-template-columns: repeat(3, 100px);
	grid-template-rows: repeat(4, 100px);
	min-height: 50vh;
	max-width: 55vw;
	border: 3px solid rgb(3, 1, 0);
}
```

<figure>
<img src="../assets/justify-content/even.png" height="390" width="862" alt="justify content property with space-evenly value">
<figcaption><p align="center">justify content property with space-evenly value</p><figcaption>
</figure>

### Note:

In order to work with this property all the units should be absolute like `%, px, rem, em`, if we use responsive units like `auto, fr`, the part which has these units will take the rest of the space and this property does not work.

```css
.container {
	display: grid;
	justify-content: space-evenly;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(4, 100px);
	min-height: 50vh;
	max-width: 55vw;
	border: 3px solid rgb(3, 1, 0);
}
```

<figure>
<img src="../assets/justify-content/fr.png" height="390" width="862" alt="justify content property with fraction unit">
<figcaption><p align="center">justify content property with fraction unit</p><figcaption>
</figure>

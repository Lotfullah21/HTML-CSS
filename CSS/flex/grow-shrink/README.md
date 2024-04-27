# Note:

The following properties are most appropriate to use for children of a container.

## 1. Flex-grow:

Using `flex-grow` property, an element can be given more weights to occupy remaining space or will try to occupy remaining space.
The value is a unitless number where it shows in what proportion the remaining space should be occupied.
default value for this property is 1.

```css
.container {
	display: flex;
	flex-wrap: wrap;
	border: 2px rgb(50, 255, 255) solid;
}
.box {
	text-align: center;
	font-size: 2.9rem;
	padding: 2rem 3rem;
	color: white;
}

.box-1 {
	background: rgb(31, 87, 10);
}
.box-2 {
	background: rgb(14, 34, 94);
}
.box-3 {
	background: rgb(119, 60, 13);
	flex-grow: 1.5;
}
```

`flex-grow:2`: Means this particular item should take spaces twice as other element when the there is space available, this space will be be created when we try to increase the size of the screen.

<figure>
<img src="../assets/grow/grow-1.png" alt="children are growing at 2 rate in flext flow" height="105" width="720" />
</figure>

The elements that do not have the `flex-grow` property will take its original space and will not grow.

`flex-grow:1.5`: Means this particular item should take spaces 1.5X as other element.

<figure>
<img src="../assets/grow/grow-1.png" alt="children are growing at 1.5x in flex flow" height="105" width="720" />
</figure>

Note that `flex-grow` property is applied only to the elements that are children of a container, not the container itself.

## 2. Flex-shrink:

This property is applied when the size of the screen gets smaller than its original size.

When the screen size gets reducing, this property sets at what rate, that particular element should get reducing comparing to its default value which is `1`.

## 3. flex basis:

The flex-basis sets the initial size of the container.

```css
.container {
	display: flex;
	border: 2px rgb(50, 255, 255) solid;
	flex: 1 1 auto;
}

.box {
	text-align: center;
	font-size: 2.9rem;
	padding: 2rem 3rem;

	color: white;
}

.box-1 {
	background: rgb(31, 87, 10);
}
.box-2 {
	background: rgb(14, 34, 94);
	flex-basis: 21rem;
}
.box-3 {
	background: rgb(119, 60, 13);
}
```

## 4. Flex:

It combines all other three properties into one and the order will be as follow:

`flex: flex-grow flex-shrink flex-basis`.

The default value is `flex: 0 1 auto`.

```css
.container {
	display: flex;
	border: 2px rgb(50, 255, 255) solid;
	flex: 0 1 auto;
}
```

## 5. Align-self:

It applies a specific rule for an individual element, for instance if we put for box-3 `align-self:center`, then the box 3 will be out of normal flow and will be place at the center.

```css
.container {
	display: flex;
	border: 2px rgb(50, 255, 255) solid;
	flex: 0 1 auto;
	height: 10rem;
}

.box {
	text-align: center;
	font-size: 2.9rem;
	padding: 2rem 3rem;
	color: white;
}

.box-1 {
	background: rgb(31, 87, 10);
}
.box-2 {
	background: rgb(14, 34, 94);
}
.box-3 {
	background: rgb(119, 60, 13);
	align-self: center;
}
```

`align-self:center`: This places a particular element at the center.

<figure>
<img src="../assets/align-self/center.png" alt="box-3 aligned in center" height="105" width="720" />
</figure>

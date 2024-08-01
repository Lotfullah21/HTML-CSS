# Animation

It gives the freedom to change the sate of our element from 0% to 100%.
It means at each span of the time, we can add a property.

```css
.two {
	background: red;
	animation-name: move;
	animation-duration: 2s;
}

@keyframes move {
	0% {
		transform: translateX(10px);
	}
	10% {
		transform: translate(20px);
		transform: rotateZ(45deg);
	}
	40% {
		background: green;
		transform: translateY(30px);
	}

	60% {
		transform: translate(90px, -10px);
	}

	100% {
		transform: translate(10px);
	}
}
```

animation name in the element we want to apply the properties should match with the value after `@keyframe.`

## shorthand

```css
animation: name duration timing-function delay iteration-count direction
	fill-mode;
```

The `animation-timing-function` property in CSS specifies the speed curve of an animation, controlling how intermediate values of the CSS properties being animated are calculated. It defines the rate of change of the animation over time, affecting the pacing of the animation.

for `iteration-count`: It specifies how many times we want the iteration to happen, we can have integer value or the `infinite` keyword

```css
animation: duration timing-function delay iteration-count direction fill-mode;
```

```css
.two {
	background: red;
	/* Move 5 times  */
	animation: move 2s 5;
	/* Move infinitely */
	animation: move 3s infinite;
}
```

## animation-fill-mode

It specifies what should happen to our element after the animation mode applied.

```css
div {
	width: 250px;
	height: 150px;
	margin-top: 50px;
	margin-left: 60px;
}

.two {
	animation: move 3s infinite;
	/* End it at what values were added at 100% of keyframe */
	animation-fill-mode: forward;
	/* After animation properties applied, go back to its original state which is specified in div */
	animation-fill-mode: backward;
}
```

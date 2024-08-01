# Transition

It allows us to control the timing of the change and make it shorter or longer.
For instance, we hover over an element, that change is reflected instantly, but with the use of `transition` property, these change can happen instantly.

It defines the transition effects for elements when their properties change.

We can control which properties will undergo transitions, the duration of the transition, the timing function, and the delay before the transition starts

It gives us to control when are moving from one state to another one.

```css
.three {
	transition: background 3s 2s, transform 1s 2s;
}
```

If we want to apply the same transition for all, use the keyword `all, transition-duration, transition-delay`.

```css
.three {
	transition: all 3s 2s;
}
```

If we don't want the delay, just remove it.

```css
.three {
	transition: all 3s;
}
```

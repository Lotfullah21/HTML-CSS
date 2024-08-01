## Transition Timing

The transition-timing-function property in CSS specifies the speed curve of a transition effect. It allows you to control how intermediate values of the CSS properties being animated are calculated.

#### Predefined Timing Functions

- `linear`: Constant speed from start to end.
- `ease`: Slow start, fast middle, slow end (default).
- `ease-in`: Slow start, then fast.
- `ease-out`: Fast start, then slow.
- `ease-in-out`: Slow start and end, fast middle.
- `step-start`: Jumps immediately to the end state.
- `step-end`: Jumps immediately to the end state.

default value for timing is `ease`: Slow start, fast middle, slow end.

```css
.three {
	transition: all 3s 2s;
	transition-timing-function: linear;
}
```

If we don't want the delay, just remove it.

```css
.three {
	transition: all 3s;
}
```

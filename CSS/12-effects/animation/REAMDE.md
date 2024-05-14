## animation:

It gives to our elements the ability to do different action at the given time.

```css
 {
	animation-name: box;
	animation-duration: 5s;
	animation-iteration-count: value;
}
```

`animation-name`: It connects the specific element to keyframe rule.

The above snippet will be added to the element we want to apply animation property.

The shorthand notation would be

```css
animation: name duration iteration-count;
```

Then the duration time will be divided into 100%, at each percent of the time, some properties can be added.
For instance

```css
.box-2 {
	margin: 2rem auto;
	background-color: rgb(1, 10, 10);
	animation: rotate 2s infinite;
	animation-fill-mode: backwards;
}
```

`animation-fill-mode:backward` means go back to its original state after the given duration.

## @keyframe

It controls the execution steps of animation property or the timing of the animation.

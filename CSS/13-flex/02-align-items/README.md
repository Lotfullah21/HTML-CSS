## Align Items:

It describes the behavior of items when they have been put cross axis(vertical axis).
The default value for this property stretch which means it will take the full height of the box or goes all along the cross axis.

### Note

To observe `align-items` behavior we need to add height to the container.

```css
.container {
	height: 30rem;
	display: flex;
	align-items: stretch;
	align-items: start;
	align-items: center;
	align-items: end;
	border: 2px rgb(50, 255, 255) solid;
}
```

These values can be assigned to align items.

1. `align-items:stretch`: Default behavior, it will take the full height of the container.

<figure>
<img src="../assets/align-items/stretch.png" alt="Items are aligned" height="205" width="720" />
</figure>
<figure>

2. . `align-items:start`: Items are placed at the beginning of cross axis.

<figure>
<img src="../assets/align-items/start.png" alt="align items with center value" height="205" width="720" />
</figure>
<figure>

3. `align-items:end`: Items are placed at the end of cross axis.

<figure>
<img src="../assets/align-items/end.png" alt="Items are aligned at the end of cross axis" height="205" width="720" />
</figure>

4. `align-items:center`: Items are aligned at the center of cross axis.

<figure>
<img src="../assets/align-items/center.png" alt="items are aligned at the center of cross axis" height="205" width="720" />
</figure>

5. `align-items:basis`: Items are aligned based on their base from bottom which means irrespective of their heights, from base (bottom) all will look aligned in one line. It will helps more when their is text of different size, when this value assigned, all will be in the same line from bottom.

<figure>
<img src="../assets/align-items/base.png" alt="items are aligned based on the contents basis" height="205" width="720" />
</figure>

# flex-wrap:

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
<img src="../assets/container.png" alt="description of row direction" height="120" width="480" />
<figcaption>flex-wrap: no wrap (default)</figcaption>
</figure> </br>
<figure>
<img src="../assets/row-rev.png" alt="flex direction row reverse" height="120" width="480" />
<figcaption>flex direction row reverse</figcaption>
</figure></br>
<figure>
<img src="../assets/col.png" alt="description of block level elements" height="480" width="140" />
<figcaption>flex direction column</figcaption>
</figure></br>
<figure>
<img src="../assets/col-rev.png" alt="flex direction reverse column" height="480" width="140" />
<figcaption>flex direction reverse column</figcaption>
</figure>

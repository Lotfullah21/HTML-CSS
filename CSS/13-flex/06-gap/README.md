## Gap:

gap property can be used to create space between the items along the main axis. You can also individually configure the gaps in rows and columns using row-gap and column-gap properties.
Gap is applied only between items, not the outer border.

This property can be added using four ways.
`gap`: It applies the spacing bot for the columns and rows, it short notation for `gap: row-gap column-gap`.

```css
.container {
	height: 20rem;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	border: 2px rgb(50, 255, 255) solid;
	gap: 30px;
}
```

`row-gap:30px`: Applies `30px` gap between elements row-wise.

<figure>
<img src="../assets/gap/row.png" alt="gaps between the rows" height="350" width="820" />
</figure>

`colum-gap:30px`: Applies `30px` gap between the columns.

<figure>
<img src="../assets/gap/column.png" alt="gaps between the rows" height="350" width="820" />
</figure>

`gap: 20px 40px`: Applies `20px` row gap and `40px` column gap.

<figure>
<img src="../assets/gap/gap-both.png" alt="gaps between the rows and columns" height="350" width="820" />
</figure>
 
`gap:30px`: Applies `30px` gap row-wise and column-wise between the container elements.

<figure>
<img src="../assets/gap/gap.png" alt="gaps applied to rows and columns" height="350" width="820" />
</figure>

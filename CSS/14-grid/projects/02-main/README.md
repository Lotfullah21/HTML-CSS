## align-justify-items-content

It is crucial to apply them for the items that are having some heights.

```css
.hero {
	min-height: 100vh;
	background: var(--clr-primary-1);
	text-align: center;
	color: white;
	display: grid;
	align-items: center;
}

.hero-banner {
	display: grid;
	background: green;
	align-content: center;
}
```

for instance, in the above css, it will not for `hero-banner` just because it does not a specific height

```css
.card-photo {
	height: 16rem;
	object-fit: cover;
}
```

crucial to have a proper image ration and aligned cards

/_ 1192-64/3 _/

```css
@media screen and (min-width: 678px) {
	.cards-center {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		justify-content: space-between;
		gap: 2rem;
	}
}
@media screen and (min-width: 992px) {
	.cards-center {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		justify-content: space-between;
		gap: 2rem;
	}
}
```

Crucial When we are getting dynamic contents, with out the given snippet code, our layout would look like this.

<figure>
<img src="../assets/issues/height.png" width="720px" height="440px">
<p text-align="center">before adding the above css</p>
</figure>

```css
.card {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr auto;
}
```

<figure>
<img src="../assets/issues/height-fixed.png" width="720px" height="440px">
<p text-align="center">After adding 1fr to middle column</p>
</figure>

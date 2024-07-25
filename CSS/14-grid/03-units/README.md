# Units.

It allows us to create rows and columns using `grid-template-rows` and `grid-template-columns`.

These values can be in `%, em, px, rem, etc` to specify width or height of each column or row.

Lets say we are having five `div` elements and we want the first two column to have `50px, 150px` width each, it can be done by adding the following code.

```css
.container{
    display: grid,
    grid-template-columns: 50px 150px
}

```

## 1. Fraction(fr):

It represents fraction of remaining space.

`grid-template-columns: 1fr` means each column takes the whole width of its parent.
`grid-template-columns: 1fr 1fr` means each column takes half of its parents width.
`grid-template-columns: 1fr 2fr` first column takes (1/3) fraction and second column takes (2/3) of the space.

For instance if `grid-template-columns: 20px 30px 40x 1fr 1fr;`, it means that first three columns will take as much space as its mentioned, but remaining space will be divided to two last column, one fraction each.

Among all, fraction is the most widely used unit in grids when we want to create responsive layouts.

## 2. Percentage(%):

It takes a percentage of the container width/height.

```css
grid-template-columns: 20px 30px 25%;
```

It divides our container into three columns, first one occupies 20px, second one 30px and third one takes `25%` width of the container out of `100%`.

For instance if the whole width is `200px`, then `25%` of this would be `50px`.

Now, if we add gap between columns, it is problematic and causes overflow.

For instance if the whole width is `200px`, then `25%` of this would be `50px` and after adding `40px` gap, now the whole width becomes `240px` and `25%` becomes `60px`, right?
No, it is not, `25%` is still that `50px`.

`%` works based on the original width of the parent and does not consider later spaces might be added.

Fraction unit does this smartly and add the gap to the width of container and based on that takes the remaining space.

## 3. auto:

It helps us to have a responsive column. Based on screen size it will get smaller or larger.

```css
grid-template-columns: 20px 30px 25% auto;
```

For instance, in the above snippet, the first three columns are fixed, each having their width;No matter width, their size always remains the same.

But last column (`auto`), is responsive. It will take the remaining space of the parent container and gets wider or smaller based on screen size.

### Note:

`auto` and `fraction` units are the two most widely used units while designing a responsive website.

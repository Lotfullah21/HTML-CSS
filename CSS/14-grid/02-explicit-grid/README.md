## Grid Explicit Properties:

### `grid-template-rows:value1 value2 value3 .... `

It allows us to create rows and columns using `grid-template-rows` and `grid-template-columns`.

It creates a row track for each value specified in `grid-template-rows` .
For instance, value1 means for value, the height of the row should be as much as is specified in value1.
These values can be in `%, em, px, rem, etc.`

Lets say we are having five `div` elements and we want the first two row to have `50px, 150px` height, each of them respectively.

```css
.container{
    display: grid,
    grid-template-row: 50px 150px
}

```

The first two rows will have the height specified earlier, but remaining ones will get what their values are.

![Explicit grid layout rows applied for all](../assets/temp-rows.png)

<p align="center">Explicit grid layout rows applied for all</p>

We can have specific height for all of them as well, lets say we want `55px 20px 40px 70px 40px;` for each of the rows respectively, just add them.

```css
.container{
    display: grid,
    grid-template-row: 55px 20px 40px 70px 40px;
}

```

![Explicit grid layout rows applied for all](../assets/temp-rows-all.png)

<p align="center">Explicit grid layout rows applied for all</p>

## Fraction(fr):

It represents fraction of remaining space when combined with other units.

For instance if `grid-template-row: 20px 30px 40x 1fr 1fr;`, it means that first three rows will take as much space as its mentioned, but remaining space will be divide to two last rows, one fraction each.

#### `grid-template-columns:value1 value2 value3 .... `

It creates a column track for each value specified in `grid-template-columns` .

It has the same properties as `grid-template-rows`, but it divides the layout into vertical sections instead of rows.

For instance, when we are have `grid-template-columns:150px, 150px` it divides our container into two section vertically, each having `50px` and `150px` width. all elements in the first column will be having width of `50px` and in the second column, width of `150px`.

!Important: Height of each element will be decided by `grid-template-rows` properties.
For instance if we have `grid-template-rows: 170px 200px 100px;`, it means that we want three rows in our layout, first one is having height of `170px`, second one is having height of `200px`, and the third one is having height of `100px`.

<figure>
<img src="../assets/temp-cols.png" alt="grid columns property" height="560" width="1120" />
<p>grid columns property</p>
</figure>

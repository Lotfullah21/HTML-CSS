<span><h3>fr</h3>:<p>fraction of available space</p></span>

<p>ALT + mouse click to select multiple selectors in html.</p>
<p>ALT + L + O to open in browser.</p>
<span><h3></h3></span>

<code>
.container {
  display: grid;
  grid-template-columns: 200px 300px auto;
  grid-template-rows: 300px auto 300px;
  border: 4px solid red;
}
</code>

<span><h3>Grid templates-Normal</h3></span>
<code>
.container {
display: grid;
grid-template-columns: 1fr 1fr 0.3fr;
grid-template-rows: 2fr 1fr;
column-gap: 10px;
row-gap: 8px;
grid-gap: 30px;
gap: 32px 10px;
gap: 40px;
border: 4px solid red;
}
</code>

<h3>Grid shorthand</h3>
<p>grid-template: rows/columns</p>
<code>
.container {
display: grid;
grid-template: 1fr 1fr 0.3fr/2fr 1fr;
column-gap: 10px;
row-gap: 8px;
grid-gap: 30px;
gap: 32px 10px;
gap: 40px;
border: 4px solid red;
}
</code>

<span><h3>Justify Content</h3></span>

<p>justify content is orking same as flex boxe's, but here we are moving cols and rows.
<b>Note:<b>take care of the unit, if we use 'fr' then this property cannot work as intended.</p>
<code>
.container {
  border: 4px solid red;
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(3, 100px);
  justify-content: center;
  justify-content: space-around;
  justify-content: space-between;
  justify-content: space-evenly;
  justify-content: flex-end;
  justify-content: flex-start;
  justify-content: first baseline;
  justify-content: space-around;
}
</code>

<span><h3>Align Content</h3></span>

<p>align-content move the elements in vertical positions.

<b>Note:<b>we shoudl have height for our container to work.
by default <code>align-content:stretch</code>.</p>
<code>
.container {
border: 4px solid red;
display: grid;
min-height: 100vh;
grid-template-columns: repeat(3, 100px);
justify-content: center;
align-content: center;
align-content: flex-end;
align-content: flex-start;
align-content: baseline;
align-content: space-around;
align-content: space-between;
align-content: space-evenly;
align-content: space-around;
}
</code>

<span><h3>Align Items||Justify Items</h3></span>

<p>it moves the element within a single row horizintally or vertically.

<code>align-items:center</code>.</p>
<span><h3>Align self||Justify self</h3></span>

<p>targets specific element and moves it around</p>
<code>
.container {
border: 4px solid red;
display: grid;
min-height: 100vh;
grid-template-columns: repeat(3, 100px);
justify-content: center;
align-items: center;
justify-items:center;

}
</code>

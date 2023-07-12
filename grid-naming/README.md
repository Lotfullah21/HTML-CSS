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

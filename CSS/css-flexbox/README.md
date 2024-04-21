<span><h4>display</h4></span>: it specifies the type of box that we want to use for our structure.

<h3>flex-box</h3>: it creates a one dimensional layout.(either along --> or along |).
it is a type of container,which provides a dynamical control over the containers.
it can grow,shrink and align along eithe the horizintal axis(main-axis) or vertical axis(cross-axis)

<code>display:flex</code> takes the whole space
<code>display:flex-inline</code> akes only the space which content fills.

<code>
flex-direction
</code>
by default is in row based box.

we can change it by putting the property value to column-based.
<code> flex-direction:column;</code>

create multiple div by
we can use felx boxes for small scale projects.
<code>box.box-${$}\*9</code>

<code>justify-content:center...</code> is responsible for aligning our items along horizintal axis or main axis.

<code> /_ along main axis _/
.container {
display: flex;
flex-wrap: wrap;
/_ regardless of the screen size, the boxes will be in the center. _/
justify-content: center;
justify-content: flex-start;
/_ the first and last ele will be sitting on the edge of container _/
justify-content: space-between;
/_ there will be some margin on the edges _/
justify-content: space-around;
/_ margins are the same _/
/_ justify-content: space-evenly; _/
}</code>

<code>align-items:flex-end...</code> is responsible for aligning our items along vertical axis or cross axis.
<code>
align-items means move the boxes in the vertical direction, top or bottom _/
.container {
height: 400px;
/_ align-items:stretch == default _/
display: flex;
flex-wrap: wrap;
/_ height: 600px; _/
align-items: flex-end;
align-items: flex-start;
align-items: center;
/_ align based on content _/
align-items: baseline;
/_ align items based on where the box is \*/
align-items: flex-start;
align-items: center;
}</code>
<code></code>
<code></code>
<code></code>
<code></code>
<code></code>
<code></code>

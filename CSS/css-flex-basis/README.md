<span><h4>flex-basis:</h4></span> no matter how much is my parent width or height, I WANT THIS BASE FOR EACH INDIVIDUAL ELEMENT.
<code>flex-basis:300px</code>
<code>
.container {
display: flex;
flex-wrap: wrap;
}

.box {
font-size: 4rem;
flex-basis: 20%;
}
</code>

<code>
<!-- short cut -->
<!-- flex:flex-grow flex-shrink flex-basis -->
.box {
  flex:1 1 300px;
}
</code>

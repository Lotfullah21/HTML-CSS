<span><h4>gap:row-distance coloumn-distance;</h4></span> it puts a gap beween rows and columns in a parent flex box.
<code>gap:0 4px</code>
<code>
.navbar {
display: flex;
justify-content: space-between;
align-items: center;
}

.nav-items {
display: flex;
background-color: rgb(126, 246, 20);
gap: 0 1.8rem;
padding: 1rem;
}

<!-- in the above code the,nav-items is a container for our list items inside, we are saying that put a distance of 1.8rem between each list item in the nav-items. -->
</code>

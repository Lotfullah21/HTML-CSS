# flex-wrap:

By default flex items tries to stay and fit in one line, but it this property can be changes by using different values for `flex-wrap` property.

```css
.container {
	display: flex;
	flex-wrap: wrap | nowrap | wrap-reverse;
}
```

`nowrap` causes overflow which means some of the contents cannot be seen and will move out of normal flow.

Following values can be assigned to `flex-direction` property:

-`wrap`: Wraps the elements across multiple lines after certain point.

  <figure>
  <img src="../assets/wrap/wrap.png" alt="description of row direction" height="240" width="700" />
  </figure>

-`nowrap`: Default value and fits all the element across main axis, but causes overflow.

  <figure>
  <img src="../assets/wrap/nowrap.png" alt="description of block level elements" height="120" width="600" />
  </figure>
-`wrap-reverse`: Wraps the element from bottom to top.
  <figure>
  <img src="../assets/wrap/wrap-rev.png" alt="flex direction row reverse" height="240" width="700" />
  </figure>

## Positions

1. ## Static:
   It is the normal position for the elements, wherever the elements are in the html file, on that exact place they will appear on the screen.

If `p` is first, it will appear first. if `h` is first, it is going to appear first.

2. ## absolute
   when the position for an element set to be absolute, that element is relative to the element that it's position is set to the `position:relative`.
   if there is no element with `position:relative` property, then the body will be considered as parent and all the positioning will be based on body.

```html
<body>
  <div class="big-img">
    <p class="one">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis quod quos
    </p>
    <p class="two">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis quod quos
      .<span class="king">I am the KING</span>
    </p>
  </div>
</body>
```

from the above html, if we consider `span` with the class of `king`, its first level parent is `p` with class `two`, then the second level parent is `div` adn last parent is `body`.

Now, if

```css
.king {
  position: relative;
}

.two {
  background: red;
}
```

we can see that there is no obvious element with `position:relative`, at this kind of situation, body will be considered as `position:relative`.

that `position` should be there in its parents, not any neighbor elements.

3. ## Fixed
   the element will be fixed relative to the view port and even if we scroll through, that element will be fixed on the screen.

```css
.navbar {
  width: 100%;
  background: black;
  color: white;
  font-size: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 0;
  text-transform: capitalize;
}
```

4. ## Sticky
   it plays the role of fixed and relative position or it toggles between the two positions and we can control that by properties like `top, left, right, bottom`

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.navbar {
  width: 100%;
  background: black;
  color: white;
  font-size: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 0;
  text-transform: capitalize;
}

div {
  margin-top: 190px;
}
.one {
  background: red;
  padding: 1rem;
}

.two {
  background: black;
  color: white;
  padding: 2rem;
  /* position: relative; */
}

.king {
  background: white;
  color: red;
  padding: 1rem;
  /* position: absolute; */
  top: 0;
  left: 0;
  display: block;
  height: 100vh;
}

.sticky {
  width: 100%;
  background: rgb(90, 81, 81);
  color: white;
  position: sticky;
  /* it says once the scroll reached 30 from the top, put the position fixed and stick it there. */
  top: 90px;
  font-size: 2rem;
  margin-top: 0;
  text-transform: capitalize;
}
```

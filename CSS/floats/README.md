## float

it allows us to move around the element which float property had been added.

for instance, if we want the elements after an image to float around an image, the `float` property should be added to the selector.

it forces the element to be out of normal flow.

```css
img {
  float: left;
}

p {
  clear: left;
}
```

use `clear` property to make sure that for the elements that are following the the element with float properties does not follow that, which means that element is not going to float around.

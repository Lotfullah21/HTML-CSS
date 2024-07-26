## EM

It depends on parent, that parent can the browser or a div.
for browser the base value is 16px, which means 1em = 16px, 2em = 32 px

`em` stands for elements and `rem` stands for root element.

if we have a div block and inside of it a child, then our child em will be calculated based on parent size.

for instance,

```css
<div class="parent">
<h1>Hello world</h1>
</div>

.parent{
    font-size = 20px
}
.child{
    /* 1em of parent is 20px */
    font-size = 2em // 40px
}
```

If we don't specify a font size for the parent element, the child element's em value will be relative to the browser's default font size, which is typically 16px

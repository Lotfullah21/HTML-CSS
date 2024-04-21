## EM

it depends on parent, that parent can the browser or a div.
for browser the base value is 16px, which means 1em = 16px, 2em = 32 px

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

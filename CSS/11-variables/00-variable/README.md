## variable

CSS variables allows to store the values in one place and later use them as many as we want.

### How to declare it

```css
--varName: value;
```

### How to use it

```css
property: var(--varName);
```

### Where to define them

Define the `css variables` inside the `:root` pseudo element so that across our css, we can have access to those variables.

## Inheritance

All children will inherit the styles from their parents unless they have their own style.
But not all properties will be inherited.

```html
<div>
	<h1>hello world</h1>
	<h2>salam kabul</h2>
</div>
```

```css
div {
	border: 2px solid red;
	font-family: aerial;
	font-size: 12px;
}

h1 {
	font-size: 10px;
}
```

Now, `h1 and h2` might have their own style, but they inherit other styles from their parent(`div`) except `border` property.

# Rules

# Last Rule

The last rule will be applied.

```css
h1 {
	color: red;
}
Even after 200 lines,
if we change the the h1 {
	color: green;
}
```

The color of our h1 element will be gree, because it came last.

# Specificity rule

If browser faces multiple styles applied to the same element, it follows the specificity of the properties that applied those styles.

`id` is having the highest level of specificity and universal selector `*` has the lowest specificity.

```html
<div>
	<h1 id="heading-1-id" class="heading-1">hello world</h1>
	<h2>salam kabul</h2>
</div>
```

```css
#heading-1-id {
	color: green;
}

.heading-1 {
	color: red;
}

* {
	color: black;
}
```

among all, the color of our h1 heading will be green because of the id.
If both of the selectors have the same specificity, the one who defined later will be applied, for instance in the above case, the color would be red if the id was not defined.

The specificity value 0, 0, 0, 0 represents the specificity weight of a CSS selector. Specificity is calculated based on the types of selectors used in a rule, and it determines which CSS rule will be applied when multiple rules could apply to the same element.

The specificity value is represented as a four-part value: a, b, c, d.

Here's what each part represents:

a: Inline styles (if any). Inline styles directly applied to an element (e.g., style="color: red;") have the highest specificity with a value of 1 in this position.
b: Number of ID selectors in the selector.
c: Number of class selectors, attributes selectors, and pseudo-classes in the selector.
d: Number of type selectors (e.g., element names) and pseudo-elements in the selector.
Specificity Examples

## Universal Selector (\*):

Specificity: 0, 0, 0, 0
Applies to all elements but has the lowest specificity.

## Class Selector (.class):

Specificity: 0, 0, 1, 0
Applies to elements with the specified class.

## ID Selector (#id):

Specificity: 0, 1, 0, 0
Applies to elements with the specified ID.

The universal selector \* has the lowest specificity 0, 0, 0, 0.
The class selector .class has a higher specificity 0, 0, 1, 0.
The ID selector #id has the highest specificity 0, 1, 0, 0.

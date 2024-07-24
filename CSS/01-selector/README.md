# Selectors:

### Element:

By choosing an element selector, the styles will be applied the chosen element.

#### Class

If class is chosen as selector, styles will be applied only to the elements that are having that class.
The class selector is prefixed with a `.` character.

#### ID:

If id is selected as selector, styles will be only applied to the element that are having that id.
Remember that ids are unique which means in a single html file, we cannot have two ids with the same name.

ids are having the highest priority in css.

#### Descendant Selectors:

Descendant selectors are useful if you need to select HTML elements that are contained within another selector.

The structure of a descendant selector is a CSS selector, followed by a single space character, followed by another CSS selector.

```css
.title div h2 {
	color: red;
}
```

select all h2 elements that are descendent of div element which are descendent of class title.

#### Child Selectors:

Child selectors are more specific than descendant selectors. They only select elements that are immediate descendants (children) of a selector (the parent).

```css
.title > h2 {
	color: red;
}
```

select the element with class title and all h2 elements that are immediate descendent of element with class title.
There might be many h2 elements, but if they are not immediate child, css rule will select them.

#### :hover Pseudo-Class:

A special keyword called a pseudo-class allows developers to select elements based on their state

<img src="./assets/selector.png"></img>

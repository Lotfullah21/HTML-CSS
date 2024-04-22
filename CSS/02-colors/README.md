From CSS Version 3, there are five main ways to reference a color.

- By RGB value,

- By RGBA value,

- By HSL value,

- By hex value and

- By predefined color names.

##### RGB value

RGB is a color model that adds the colors red (R), green (G) and blue (B) together to create colors. This is based on how the human eye sees colors.
Each color is represented by number from 0-255, if 0, it means that color has zero intensity, if 255, that means the intensity of the color is fully considered.

If RGB=(255,255,255), it means all three (red, green, blue) colors are fully considered.
If RGB=(255,0,0), it means the outcome color is fully red, because the other two colors intensity are zero and same can be applied to the other two colors as well.

```css
p {
  color: rgb(0, 0, 255); # Fully blue
}
```

###### RGBA value

RGBA is an extension of RGB that add an alpha (A) channel. The alpha channel represents the opacity, or transparency, of the color.

```css
p {
  color: rgb(0, 0, 255,0.5); # Fully blue but with 50% transparency.
}
```

##### HEX values

The hex colors can be represented by #RedRedGreenGreenBlueBlue or #RRGGBB, its values goes from 1-9 and after that it uses characters to represent a number.
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F.

For instance, 1 2 3 4 5 6 7 8 9 A(10) B(11) C(12) D(13) E(14) F(15).

RGB 255,0,0 would be written as hexadecimal #FF0000.
RGB 0,255,0 would be written as hexadecimal #00FF00.
RGB 0,0,255 would be written as hexadecimal #0000FF.
#000 BLACK
#FFFFFF WHITE

<a href="https://coolors.com">colors</a>

###### Predefined color names

Modern web browsers support 140 predefined color names. These color names are for convenience purposes and can be mapped to equivalent hex/RGB/HSL values.

Some Famous ones:

- black
- silver
- gray
- white
- green
- red

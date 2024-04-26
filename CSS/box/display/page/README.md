## visibility

`visibility:hidden`: hide the element from the flow, but space will be kept.
`opacity:0`: clearance of the whole element, if zero, still the space will be kept.
`display:none`: remove the element from the flow

## border box:

it preserves the overall layout, even if padding is added to a particular element, the padding size does not effect the overall size of the box, in fact it might reduce the size of the content so that padding can be added.
if `box-sizing:border-box` is not added, then adding padding will increase the size of the box.

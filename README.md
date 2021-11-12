# autoshapes-example

Sandbox for playing with auto-generated SVG shapes on a web page.

## Basic usage of shapelib

Shapes are available in different categories (kinds)
- wavy: a line that starts in one point and and ends in a different point - no loops
- loopy: a line that starts in one point and and ends in a different point - with loops
- closed: a line that starts in one point and and ends in the same point - covers an area that can be filled

plain js:
```javascript
import shapelib
shapelib.core.drawShape({element, ...shapeProps, ...styleProps})
```

react:
```jsx
import { ShapeComponent } from shapelib;

const yourComponent(props) => {
    return (
        # ...
        <ShapeComponent ...shapeProps ...styleProps/>
        # ...
    )
}
```

## shapeProps
`shapeProps` are properties that define the type and form of a shap (as opposed to colors/style etc.)

```typescript
interface shapeProps{
    kind: string,
    complexity: number,
    smoothness: number, 
    variability: number,
    seed: number,
}
```

- `kind`: see above 
- `complexity`: (int) how many base-elements make up the shape. For lines, higher complexity means longer lines. For closed shapes, higher complexity means more corners.
- `smoothness`: (float [0-inf]) pretty much behaves as you would expect.
- `variability`: (float [0-inf]) how much randomness to add to each point in a shape.
- `seed`: (int) seed for random number generator so it's possible to generate the same shape each time.

## styleProps
`styleProps` are properties that define colors, fill, stroke and other stylistic properties. These props can also be used to introduce scaling and rotations.

these propserties are passed directly to the underlying SVG.js library. See the [SVG.js Documentation for allowed properties](https://svgjs.dev/docs/3.0/manipulating/). 

For example:
```
<ShapeComponent ...shapeProps stroke={{ color: gradient.url(), width: 3, opacity: 0.8 }}/>
```

# TBD:
## Low level interface

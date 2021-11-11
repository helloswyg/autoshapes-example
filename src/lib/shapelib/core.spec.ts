import { PathArray } from '@svgdotjs/svg.js';
import * as core from './core';

test('getShape returns a PathArray', () => {
  const shapeProps = {
    kind: core.ShapeKind.WAVY,
    complexity: 4,
    smoothness: 2,
    variability: 9,
    seed: 123,
  };

  const myShape = core.getShape(shapeProps);

  expect(myShape).toBeInstanceOf(PathArray)
});

test.skip('drawShape returns a PathArray', () => {
  const shapeProps = {
    kind: core.ShapeKind.WAVY,
    complexity: 4,
    smoothness: 2,
    variability: 9,
    seed: 123,
  };

  const myShape = core.drawShape(shapeProps);

  expect(myShape).toBeInstanceOf(PathArray)
});

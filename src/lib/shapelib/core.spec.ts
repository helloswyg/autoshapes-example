import { Path, PathArray } from '@svgdotjs/svg.js';
import * as core from './core';
import { simpleLinearGradient } from './utils';

test('getShape returns a PathArray', () => {
  const myShape = core.getShape(core.defaultShapeProps);

  expect(myShape).toBeInstanceOf(PathArray);
});

test('drawShape returns a Path', () => {
  let dummyElement = document.createElement('div');

  const myShape = core.drawShape({ element: dummyElement, ...core.defaultDrawShapeProps });

  expect(myShape).toBeInstanceOf(Path);
});

test('gradient fill returns a Path', () => {
  let dummyElement = document.createElement('div');
  const gradientSpec = simpleLinearGradient(['red', 'blue']);

  const myShape = core.drawShape({ element: dummyElement, kind: core.ShapeKind.CLOSED, fill: gradientSpec });

  expect(myShape).toBeInstanceOf(Path);
});

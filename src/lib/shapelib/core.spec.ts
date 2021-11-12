import { Path, PathArray } from '@svgdotjs/svg.js';
import * as core from './core';

test('getShape returns a PathArray', () => {
  const myShape = core.getShape(core.defaultShapeProps);

  expect(myShape).toBeInstanceOf(PathArray);
});

test('drawShape returns a Path', () => {
  let dummyElement = document.createElement('div');
  const myShape = core.drawShape({ element: dummyElement, ...core.defaultDrawShapeProps });

  expect(myShape).toBeInstanceOf(Path);
});

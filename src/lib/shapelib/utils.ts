import { Path, PathArray, PointArray, Svg, SVG } from '@svgdotjs/svg.js';
import seedrandom from 'seedrandom';
import { GradientSpec } from '.';

export function smooth(pathArray: PathArray): PathArray {
  let flattenedArray = pathArray.flat();
  console.log(flattenedArray);
  if (flattenedArray.length === 0) return new PathArray();
  if (flattenedArray[0] === 'S') {
    return pathArray;
  }
  if (flattenedArray[0] === 'M') {
    flattenedArray = flattenedArray.slice(3);
  }
  if (flattenedArray[0] === 'C') {
    flattenedArray = flattenedArray.slice(2);
    flattenedArray[0] = 'S';
  } else {
    throw new Error('Only cubic bezier curves are supported. ' + flattenedArray);
  }
  return new PathArray(flattenedArray);
}

export function flip(pathArray: PathArray, how: 'x' | 'y'): PathArray {
  let flattenedArray = pathArray.flat();
  let numberCounter = 0;

  for (let index = 0; index < flattenedArray.length; index++) {
    const element = flattenedArray[index];
    if (typeof element === 'number') {
      if (how === 'y') {
        // if element is at an even-numbered position it's an x coordidante otherwise a y coordinate
        flattenedArray[index] = numberCounter % 2 === 0 ? element : -element;
      }
      if (how === 'x') {
        // if element is at an even-numbered position it's an x coordidante otherwise a y coordinate
        flattenedArray[index] = numberCounter % 2 === 1 ? element : -element;
      }
      numberCounter += 1;
    }
  }
  return new PathArray(flattenedArray);
}

export function flipY(pathArray: PathArray): PathArray {
  return flip(pathArray, 'y');
}

export function flipX(pathArray: PathArray): PathArray {
  return flip(pathArray, 'x');
}

export function flipXY(pathArray: PathArray): PathArray {
  return flip(flip(pathArray, 'x'), 'y');
}

export function scale(pathArray: PathArray, factor: number): PathArray {
  // scale path relative to 0,0 means we simply multiply all numbers by factor
  let flattenedArray = pathArray.flat();
  for (let index = 0; index < flattenedArray.length; index++) {
    const value = flattenedArray[index];
    if (typeof value === 'number') {
      flattenedArray[index] = value * factor;
    }
  }
  return new PathArray(flattenedArray);
}

export function noise(pathArray: PathArray, factor: number = 10, seed?: string): PathArray {
  // TODO: adding noise to control points creates weird artifacts.
  const rng = seedrandom(seed);
  let flattenedArray = pathArray.flat();
  for (let index = 0; index < flattenedArray.length; index++) {
    const value = flattenedArray[index];
    if (typeof value === 'number') {
      flattenedArray[index] = value + factor * rng();
    }
  }
  return new PathArray(flattenedArray);
}

export function small(pathArray: PathArray): PathArray {
  return scale(pathArray, 0.5);
}

export function big(pathArray: PathArray): PathArray {
  return scale(pathArray, 2.0);
}

export function toPointArray(pathArray: PathArray): PointArray {
  let flattenedArray = pathArray.flat();
  let output: number[] = [];

  for (let index = 0; index < flattenedArray.length; index++) {
    const element = flattenedArray[index];
    if (typeof element === 'number') {
      output = output.concat(element);
    }
  }
  return new PointArray(output);
}

/* 
Rotate points around origin depending on their distance from the origin
*/
export function bend(pathArray: PathArray): PathArray {
  let flattenedArray = pathArray.flat();
  let numberCounter = 0;
  let lastX = 0;

  for (let index = 0; index < flattenedArray.length; index++) {
    const element = flattenedArray[index];
    if (typeof element === 'number') {
      if (numberCounter % 2 === 0) {
        // is x coordinate
        lastX = element;
      } else {
        const x = lastX;
        const y = element;
        const r = Math.sqrt(x * x + y * y);
        const angle = (2 * Math.PI * r) / 100000;
        const newX = x * Math.cos(angle) - y * Math.sin(angle);
        const newY = x * Math.sin(angle) + y * Math.cos(angle);
        flattenedArray[index] = newY;
        flattenedArray[index - 1] = newX;
      }
      numberCounter++;
    }
  }
  return new PathArray(flattenedArray);
}

/* 
Rotate all points around origin
We need to re-implement this because the transform operation messes up bounding boxes used to set the viewport
*/
export function rotate(pathArray: PathArray, angle: number): PathArray {
  let flattenedArray = pathArray.flat();
  let numberCounter = 0;
  let lastX = 0;

  for (let index = 0; index < flattenedArray.length; index++) {
    const element = flattenedArray[index];
    if (typeof element === 'number') {
      if (numberCounter % 2 === 0) {
        // is x coordinate
        lastX = element;
      } else {
        const x = lastX;
        const y = element;
        const newX = x * Math.cos(angle) - y * Math.sin(angle);
        const newY = x * Math.sin(angle) + y * Math.cos(angle);
        flattenedArray[index] = newY;
        flattenedArray[index - 1] = newX;
      }
      numberCounter++;
    }
  }
  return new PathArray(flattenedArray);
}

export function pathCompose(segments: PathArray[], modifier = (p: PathArray) => p): PathArray {
  // we assume that the last two numbers in a path segment are the end point of the path so far.
  // That end point will be the starting point of the next segment.
  // each segment is encoded as if starting at 0,0 so the segment has to be translated to new coordinates before appending.
  // let modifierFunc = smooth//(l:PathArray) => l
  // if (modifier) modifierFunc = modifier

  let output = new PathArray();
  if (segments[0].flat()[0] !== 'M') {
    output = output = new PathArray('M 0 0');
  }

  segments.forEach((segment) => {
    const flattenedOutput = output.flat();
    let flattenedSegment = segment.flat();
    if (flattenedSegment[0] === 'M') flattenedSegment = flattenedSegment.slice(3);
    const x = flattenedOutput[flattenedOutput.length - 2];
    const y = flattenedOutput[flattenedOutput.length - 1];
    let numberCounter = 0;

    if (typeof x !== 'number' || typeof y !== 'number') return output;
    for (let index = 0; index < flattenedSegment.length; index++) {
      const element = flattenedSegment[index];
      if (typeof element === 'number') {
        // if element is at an even-numbered position it's an x coordidante otherwise a y coordinate
        flattenedSegment[index] = element + (numberCounter % 2 === 0 ? x : y);
        numberCounter += 1;
      }
    }
    output = output.concat(modifier(new PathArray(flattenedSegment))) as PathArray;
  });

  return output;
}

export function quickDrawPath(elementID: string, pathArray: PathArray): Path {
  const draw: Svg = SVG().addTo(elementID).size('100%', '100%');
  const path = draw.path(pathArray).fill('none').stroke({ color: '#000', width: 3 });
  return path;
}

export function simpleLinearGradient(stops: string[], orientation = 90) {
  const gradientSpec: GradientSpec = {
    type: 'linear',
    block: (add) => {
      for (let i = 0; i < stops.length; i++) {
        add.stop(i / (stops.length - 1), stops[i]);
      }
    },
    orientation,
  };
  return gradientSpec;
}

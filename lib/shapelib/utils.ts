import { PathArray, PointArray } from "@svgdotjs/svg.js";

export function smooth(pathArray: PathArray): PathArray {
  let flattened_array = [].concat.apply([], pathArray);
  if (flattened_array[0] == "S") {
    return pathArray;
  }
  if (flattened_array[0] == "M") {
    flattened_array = flattened_array.slice(3);
  }
  if (flattened_array[0] == "C") {
    flattened_array = flattened_array.slice(2);
    flattened_array[0] = "S";
  } else {
    throw new Error("Only cubic bezier curves are supported");
  }
  return flattened_array;
}

export function flip(pathArray: PathArray, how: "x" | "y"): PathArray {
  let flattenedArray = [].concat.apply([], pathArray);
  let numberCounter = 0;

  for (let index = 0; index < flattenedArray.length; index++) {
    const element = flattenedArray[index];
    if (typeof element === "number") {
      if (how == "y") {
        // if element is at an even-numbered position it's an x coordidante otherwise a y coordinate
        flattenedArray[index] = numberCounter % 2 == 0 ? element : -element;
      }
      if (how == "x") {
        // if element is at an even-numbered position it's an x coordidante otherwise a y coordinate
        flattenedArray[index] = numberCounter % 2 == 1 ? element : -element;
      }
      numberCounter += 1;
    }
  }
  return flattenedArray;
}

export function flipY(pathArray: PathArray): PathArray {
  return flip(pathArray, "y");
}

export function flipX(pathArray: PathArray): PathArray {
  return flip(pathArray, "x");
}

export function flipXY(pathArray: PathArray): PathArray {
  return flip(flip(pathArray, "x"), "y");
}

export function scale(pathArray: PathArray, factor: number) {
  // scale path relative to 0,0 means we simply multiply all numbers by factor
  let flattenedArray = [].concat.apply([], pathArray);
  for (let index = 0; index < flattenedArray.length; index++) {
    if (typeof flattenedArray[index] === "number") {
      flattenedArray[index] *= factor;
    }
  }
  return flattenedArray;
}

export function small(pathArray: PathArray): PathArray {
  return scale(pathArray, 0.5);
}

export function big(pathArray: PathArray): PathArray {
  return scale(pathArray, 2.0);
}

export function toPointArray(pathArray: PathArray): PointArray {
  const flattenedArray = [].concat.apply([], pathArray);
  let output = new Array();

  for (let index = 0; index < flattenedArray.length; index++) {
    const element = flattenedArray[index];
    if (typeof element === "number") {
      output = output.concat([element]);
    }
  }
  return new PointArray(output);
}

export function pathCompose(segments: PathArray[]): PathArray {
  // we assume that the last two numbers in a path segment are the end point of the path so far.
  // That end point will be the starting point of the next segment.
  // each segment is encoded as if starting at 0,0 so the segment has to be translated to new coordinates before appending.

  let output = new PathArray();
  if ([].concat.apply([], segments[0])[0] != "M") {
    output = output = new PathArray("M 0 0");
  }

  segments.forEach((segment) => {
    const flattened_output = [].concat.apply([], output);
    let flattened_segment = [].concat.apply([], segment);
    const x: number = flattened_output[flattened_output.length - 2];
    const y: number = flattened_output[flattened_output.length - 1];
    let number_counter = 0;

    for (let index = 0; index < flattened_segment.length; index++) {
      const element = flattened_segment[index];
      if (typeof element === "number") {
        // if element is at an even-numbered position it's an x coordidante otherwise a y coordinate
        flattened_segment[index] += number_counter % 2 == 0 ? x : y;
        number_counter += 1;
      }
    }
    output = output.concat(flattened_segment) as PathArray;
  });

  return output;
}

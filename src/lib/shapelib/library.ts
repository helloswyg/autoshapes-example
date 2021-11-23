import { PathArray } from '@svgdotjs/svg.js';
import seedrandom from 'seedrandom';
import { pathCompose, flipY, flipX, flipXY, small, big } from './utils';
export type pathLibrary = { [key: string]: PathArray };

////////////////////////////////////////////////////////////////////////////////////
// basic blocks
////////////////////////////////////////////////////////////////////////////////////
const loopSegment = new PathArray('C 25 50 25 100 0 100');
const reverseLoopSegment = new PathArray('C 25 0 25 50 0 100');
const curveSegment90 = new PathArray('C 50 0 100 50 100 100');
const reverseCurveSegment90 = new PathArray('C 0 50 50 100 100 100');
const curveSegment45 = new PathArray('C 50 25 75 50 100 100');
const reverseCurveSegment45 = new PathArray('C 25 50 50 75 100 100');
const connectorSegment = new PathArray('C 50 25 90 25 100 25');
const reverseConnectorSegment = new PathArray('C 10 0 50 0 100 25');
const horizontalrSegment = new PathArray('C 25 0 25 0 25 0');

export const basicBlocks: pathLibrary = {
  loopSegment,
  reverseLoopSegment,
  curveSegment45,
  reverseCurveSegment45,
  curveSegment90,
  reverseCurveSegment90,
  connectorSegment,
  reverseConnectorSegment,
  horizontalrSegment,
};

////////////////////////////////////////////////////////////////////////////////////
// composite shapes
////////////////////////////////////////////////////////////////////////////////////
export const loop = pathCompose([
  curveSegment45,
  loopSegment,
  flipXY(reverseLoopSegment),
  flipY(reverseCurveSegment45),
]);
export const crest = pathCompose([curveSegment45, flipY(reverseCurveSegment45)], (l)=>l);
export const connector = pathCompose([connectorSegment, flipY(reverseConnectorSegment)]);
export const twistConnector = pathCompose([connectorSegment, reverseConnectorSegment]);
export const drop = pathCompose([
  curveSegment90,
  flipX(loopSegment),
  small(small(horizontalrSegment)),
  flipY(reverseLoopSegment),
  flipY(reverseCurveSegment90),
]);

export const compositeShapes: pathLibrary = {
  loop,
  crest,
  connector,
  twistConnector,
  drop,
};

export interface LoopyLineParams {
  numElements: number;
  variability: number;
  smoothness: number;
  baseRadius: number;
}

export function loopyLine(params: LoopyLineParams): PathArray {
  // TODO: make loopy line procedural
  return pathCompose([
    new PathArray(['M 0 0']),
    small(flipY(crest)),
    twistConnector,
    small(loop),
    big(flipY(loop)),
    connector,
  ]);
}

////////////////////////////////////////////////////////////////////////////////////
// closed shapes
////////////////////////////////////////////////////////////////////////////////////

export function nPointRadial(radialDistances: number[], smoothness: number=0.5): PathArray {
  const offset = { x: 100, y: 100 };
  let output = new PathArray(['M', offset.x, offset.y + radialDistances[0]]);
  const numSegments = radialDistances.length;

  for (let i = 1; i < radialDistances.length + 1; i++) {
    const r = radialDistances[i % numSegments];
    const deltaR = radialDistances[i % numSegments] - radialDistances[(i-1) % numSegments]
    const controlpointLength = (Math.abs(deltaR) / r + .5)  * smoothness * r / numSegments * 2 * Math.PI
    const x = r * Math.sin((i * 2 * Math.PI) / numSegments) + offset.x;
    const y = r * Math.cos((i * 2 * Math.PI) / numSegments) + offset.y;
    const dX = -Math.cos(i * 2 * Math.PI / numSegments) * controlpointLength;
    const dY = Math.sin(i * 2 * Math.PI/ numSegments) * controlpointLength;
    const controlPointX = x + dX;
    const controlPointY = y + dY;

    if (i === 1) {
      output = output.concat([
        'C',
        controlpointLength + offset.x,
        radialDistances[0] + offset.y,
        controlPointX,
        controlPointY,
        x,
        y,
      ]) as PathArray;
    } else {
      output = output.concat(['S', controlPointX, controlPointY, x, y]) as PathArray;
    }
  }

  output = output.concat(['z']) as PathArray;

  return output;
}

export interface ClosedPathParams {
  numPoints: number;
  variability: number;
  smoothness: number;
  baseRadius: number;
}

export function closedPath(params: ClosedPathParams): PathArray {
  const rng = seedrandom('seed string');
  const oddNumberedBaseRadius = params.baseRadius - params.variability
  const radii = new Array(params.numPoints);
  for (let i = 0; i < params.numPoints; i++) {
    const currentBaseRadius = i%2 === 0 ? params.baseRadius : oddNumberedBaseRadius
    radii[i] = currentBaseRadius + (rng() - 0.5) * params.variability;
  }
  return nPointRadial(radii, params.smoothness);
}

export const blob2 = nPointRadial([75, 75]);
export const blob3 = nPointRadial([75, 75, 20]);
export const blob4 = nPointRadial([75, 75, 20, 90]);
export const blob5 = nPointRadial([75, 75, 20, 100, 25]);

export const closedShapes: pathLibrary = {
  blob2,
  blob3,
  blob4,
  blob5,
};

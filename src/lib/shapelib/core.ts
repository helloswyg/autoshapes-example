import { bindExpression } from '@babel/types';
import { FillData, MatrixAlias, PathArray, StrokeData, SVG, Svg } from '@svgdotjs/svg.js';
import { library } from '.';

export enum ShapeKind {
  WAVY,
  LOOPY,
  CLOSED,
}

export interface ShapeProps {
  kind: ShapeKind;
  complexity?: number;
  smoothness?: number;
  variability?: number;
  seed?: number;
}

export type StyleProps = {
  fill?: FillData | string;
  stroke?: StrokeData;
  // gradient?: { type: string; block?: (stop: Gradient) => void };
  transform?: MatrixAlias;
};

export type Element = {
  element: HTMLElement | string;
};

export type DrawShapeParams = Element & ShapeProps & StyleProps;

export const defaultShapeProps: Required<ShapeProps> = {
  kind: ShapeKind.CLOSED,
  complexity: 4,
  smoothness: 1,
  variability: 1,
  seed: 1,
};

export const defaultStyleProps: Required<StyleProps> = {
  fill: { color: '#000', opacity: 0.0 },
  stroke: { color: 'black', width: 3, opacity: 0.8 },
  transform: {},
};

export const defaultDrawShapeProps = { ...defaultShapeProps, ...defaultStyleProps };

export function getShape(params: ShapeProps) {
  const allParams: Required<ShapeProps> = { ...defaultShapeProps, ...params };
  switch (allParams.kind) {
    case ShapeKind.LOOPY:
      // TODO: make loopy line procedural
      return library.loopyLine({
        numElements: allParams.complexity,
        variability: allParams.variability,
        smoothness: allParams.smoothness,
        baseRadius: 100,
      });
    case ShapeKind.WAVY:
      // TODO: implemeny wavy line
      return library.loopyLine({
        numElements: allParams.complexity,
        variability: allParams.variability,
        smoothness: allParams.smoothness,
        baseRadius: 100,
      });
    case ShapeKind.CLOSED:
      return library.closedPath({
        numPoints: allParams.complexity,
        variability: allParams.variability,
        smoothness: allParams.smoothness,
        baseRadius: 100,
      });
    default:
      break;
  }
  return new PathArray();
}

export function drawShape(params: DrawShapeParams) {
  const allParams: Required<DrawShapeParams> = { ...defaultDrawShapeProps, ...params };
  const pathArray = getShape(allParams as ShapeProps);
  const draw: Svg = SVG().addTo(allParams.element).size('100%', '100%');
  let path = draw.path(pathArray);
  let filledPath = path;

  // some verbose language to be allowed to use overloaded "fill" function with union types
  if (typeof allParams.fill === 'string') {
    filledPath = path.fill(allParams.fill as string);
  } else {
    filledPath = path.fill(allParams.fill as FillData);
  }
  path = filledPath.stroke(allParams.stroke);

  // set viewport for svg to bounding box + margin
  try {
    const bbox = path.bbox();
    const margin = 4;
    const bboxExpanded = {
      x: bbox.x - margin,
      y: bbox.y - margin,
      width: bbox.width + margin * 2,
      height: bbox.height + margin * 2,
    };
    draw.viewbox({ ...bboxExpanded });
  } catch (e) {
    //TODO: do something to get an alternative bounding box
  }

  return path;
}

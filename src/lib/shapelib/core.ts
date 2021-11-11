import { FillData, MatrixAlias, PathArray, StrokeData, SVG, Svg } from '@svgdotjs/svg.js';

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
  fill?: FillData;
  stroke?: StrokeData;
  // gradient?: { type: string; block?: (stop: Gradient) => void };
  transform?: MatrixAlias;
};

export type Element = {
  element: HTMLElement | string;
};

export type DrawShapeParams = Element & ShapeProps & StyleProps;

export const defaultShapeProps: Required<ShapeProps> = {
  kind: ShapeKind.LOOPY,
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

export function getShape(props: ShapeProps) {
  switch (props.kind) {
    case ShapeKind.LOOPY:
      break;
    case ShapeKind.CLOSED:
      break;
    default:
      break;
  }
  return new PathArray();
}

export function drawShape(params: DrawShapeParams) {
  const allParams: Required<DrawShapeParams> = { ...defaultDrawShapeProps, ...params };

  const draw: Svg = SVG().addTo(allParams.element).size('100%', '100%');
  let pathArray = getShape(allParams as ShapeProps);
  const path = draw.path(pathArray).fill(allParams.fill).stroke(allParams.stroke);

  return path;
}

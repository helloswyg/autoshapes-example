import { Container, FillData, Gradient, MatrixAlias, PathArray, StrokeData, SVG, Svg } from '@svgdotjs/svg.js';
import { library } from '.';

// Type definitions /////////////////////////////////////////////////////////////////////////////////////////////////////////

export enum ShapeKind {
  WAVY,
  LOOPY,
  CLOSED,
}

export interface PathProps {
  kind: ShapeKind;
  complexity?: number;
  smoothness?: number;
  variability?: number;
  seed?: number;
  path?: PathArray | null;
}

export interface GradientSpec {
  type: string;
  block: (stop: Gradient) => void;
  orientation?: number;
}

function isGradientSpec(spec: any): spec is GradientSpec {
  if (!('type' in spec)) return false;
  if (!('block' in spec)) return false;
  return ['linear', 'radial'].includes((spec as GradientSpec).type);
}

export type StyleProps = {
  fill?: FillData | string | GradientSpec;
  stroke?: StrokeData | string | GradientSpec;
  transform?: MatrixAlias;
};

export type Element = {
  element: HTMLElement | string;
};

export type ShapeProps = PathProps & StyleProps;
export type DrawShapeParams = Element & PathProps & StyleProps;

// Default Values /////////////////////////////////////////////////////////////////////////////////////////////////////////

export const defaultShapeProps: Required<PathProps> = {
  kind: ShapeKind.CLOSED,
  complexity: 4,
  smoothness: 1,
  variability: 1,
  seed: 1,
  path: null,
};

export const defaultStyleProps: Required<StyleProps> = {
  // TODO: Do we need opacity?
  fill: { color: 'black', opacity: 0.0 },
  stroke: { color: 'black', width: 3, opacity: 0.8  },
  transform: {},
};

export interface ShapeTheme {
  // TODO: Maybe add some shortcuts like color and thickness?
  color: string;
  thickness: number;
  shape: Required<PathProps>;
  style: Required<StyleProps>;
};

const DEFAULT_SHAPE_PROPS: ShapeTheme = {
  color: 'black',
  thickness: 3,
  shape: defaultShapeProps,
  style: defaultStyleProps,
};

// TODO: This Was called defaultDrawShapeProps:
export let theme: ShapeTheme = DEFAULT_SHAPE_PROPS;

export function setShapeTheme(theme: Partial<ShapeTheme>) {
  // TODO: This should probably be a deep merge instead:
  theme = {
    ...DEFAULT_SHAPE_PROPS,
    ...theme,
  };

  // TODO: Change defaultShapeProps and defaultStyleProps as well ure always get them from defaultDrawShapeProps.
}

// Function implementations /////////////////////////////////////////////////////////////////////////////////////////////////////////

export function getShape(params: PathProps) {
  const allParams: Required<PathProps> = { ...defaultShapeProps, ...params };
  if (allParams.path !== null) return allParams.path;

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
  const pathArray = getShape(allParams as PathProps);
  const draw: Svg = SVG().addTo(allParams.element).size('100%', '100%');
  let path = draw.path(pathArray);
  let filledPath = path;

  // some verbose language to be allowed to use overloaded "fill" function with union types
  if (typeof allParams.fill === 'string') {
    filledPath = path.fill(allParams.fill as string);
  } else if (isGradientSpec(allParams.fill)) {
    const gradientParams: Parameters<Container['gradient']> = [allParams.fill.type, allParams.fill.block];
    const gradient = draw.gradient(...gradientParams).rotate(allParams.fill.orientation || 0);
    filledPath = path.fill(gradient);
  } else {
    filledPath = path.fill(allParams.fill);
  }

  if (typeof allParams.stroke === 'string') {
    path = filledPath.stroke(allParams.stroke as string);
  } else if (isGradientSpec(allParams.stroke)) {
    const gradientParams: Parameters<Container['gradient']> = [allParams.stroke.type, allParams.stroke.block];
    const gradient = draw.gradient(...gradientParams).rotate(allParams.stroke.orientation || 0);
    filledPath = path.fill(gradient);
  } else {
    path = filledPath.stroke(allParams.stroke as StrokeData);
  }

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
    // this is currently only a problem in jest. Real browsers do fine.
  }

  return path;
}

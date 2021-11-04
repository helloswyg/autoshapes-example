import { FillData, Gradient, MatrixAlias, StrokeData, Svg, SVG } from '@svgdotjs/svg.js';
import { library } from '.';

export interface ShapeTheme {
  primary: string;
  secondary: string;
  type: 'line' | 'closed';
  complexity: number;
  fill: FillData;
  stroke: StrokeData;
  gradient?: { type: string; block?: (stop: Gradient) => void };
  transform?: MatrixAlias;
}

export function drawThemedShape(element: HTMLElement, theme: ShapeTheme) {
  const draw: Svg = SVG().addTo(element).size('100%', '100%');
  let pathArray = library.loop;
  if (theme.type === 'closed') {
    pathArray = library.blob3;
  }
  return draw.path(pathArray).fill(theme.fill).stroke(theme.stroke);
}

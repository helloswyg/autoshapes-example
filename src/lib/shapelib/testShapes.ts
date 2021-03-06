import { SVG, Svg } from '@svgdotjs/svg.js';
import { library } from '.';
import { big, flipY, pathCompose, quickDrawPath, small, toPointArray } from './utils';

export function drawTestCurve(elementID: string): Svg {
  const draw: Svg = SVG().addTo(elementID).size('100%', '100%');
  const gradient = draw.gradient('linear', function (add) {
    add.stop(0, '#333');
    add.stop(1, '#f03');
  });
  const composedPath = pathCompose([
    small(flipY(library.crest)),
    library.twistConnector,
    // flipY(library.connector),
    // library.crest,
    small(library.loop),
    // flipY(library.connector),
    big(flipY(library.loop)),
    library.connector,
  ]);

  const transformParams = {
    rotate: 0,
    translateX: 0,
    translateY: 500,
    scale: 1,
  };

  draw
    .path(composedPath)
    .fill('none')
    .stroke({ color: gradient.url(), width: 3, opacity: 0.8 })
    .transform(transformParams);

  draw.polyline(toPointArray(composedPath)).fill('none').stroke({ color: '#faa', width: 0 }).transform(transformParams);
  return draw;
}

export function drawGallery(element: string | HTMLElement, gallery: library.pathLibrary, fill: string = 'none'): void {
  const targetElement = element instanceof HTMLElement ? element : document.querySelector(element);
  if (targetElement === null) return;
  Object.keys(gallery).forEach((key) => {
    const block = gallery[key];
    const div = document.createElement('div');
    div.id = key + targetElement.id;
    div.className = 'gallery-element';
    targetElement.appendChild(div);
    quickDrawPath(`#${div.id}`, pathCompose([block]))
      .transform({
        translateX: 25,
        translateY: 25,
      })
      .fill(fill);
  });
}

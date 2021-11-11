import { PathArray } from '@svgdotjs/svg.js';
import * as library from './library'

test('Radial Shape Function Returns a point array', () => {
  for (let i = 3; i < 10; i++) {
    const radii = new Array(i).fill(0);
    for (let r = 0; r < i; r++) {
      radii[r] = 100 + r * 10
    }
    const shape = library.nPointRadial(radii)
    expect(shape).toBeInstanceOf(PathArray)
  }
    
  });
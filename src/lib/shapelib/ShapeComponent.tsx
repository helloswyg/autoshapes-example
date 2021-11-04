import { useEffect, useRef } from 'react';
import { drawThemedShape, ShapeTheme } from './themedShape';

export type ShapeProps = ShapeTheme;

export const Shape = (props: ShapeProps) => {
  const refToDiv = useRef(null);

  useEffect(() => {
    refToDiv.current && drawThemedShape(refToDiv.current, props);
  });

  return (
    <div ref={refToDiv} id="line-example" style={{ width: '100%', height: '100%', position: 'absolute', zIndex: -1 }} />
  );
};

import { useEffect, useRef } from 'react';
import { drawShape, ShapeProps, StyleProps } from './core';

type ShapeComponentProps = ShapeProps & StyleProps;

export const ShapeComponent = (props: ShapeComponentProps) => {
  const refToDiv = useRef(null);

  useEffect(() => {
    if (refToDiv.current) {
      const ref = refToDiv.current as HTMLElement;
      ref.textContent = '';
      drawShape({ element: ref, ...props });
    }
  });

  return <div ref={refToDiv} style={{ width: '100%', height: '100%', position: 'absolute', zIndex: -1 }} />;
};

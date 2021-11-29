import React, { useEffect, useRef } from 'react';
import { drawShape, ShapeProps } from '../core';

export type ShapeComponentProps = ShapeProps & React.HTMLAttributes<HTMLElement>

export const ShapeComponent: React.FC<ShapeComponentProps> = (props) => {
  const refToDiv = useRef(null);

  useEffect(() => {
    if (refToDiv.current) {
      const ref = refToDiv.current as HTMLElement;
      ref.textContent = '';
      drawShape({ element: ref, ...props });
    }
  });

  return <div ref={refToDiv} style={{ width: '100%', height: '100%', zIndex: -1 }} {...props} />;
};

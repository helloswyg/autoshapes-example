import React, { useEffect, useRef } from 'react';
import { drawShape, ShapeProps } from './core';

export const ShapeComponent: React.FC<ShapeProps & React.HTMLAttributes<HTMLElement>> = (props) => {
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

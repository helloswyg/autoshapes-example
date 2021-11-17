import React, { useCallback, useEffect, useRef, useState } from 'react';
import { drawShape, ShapeProps } from './core';

export interface ShapeComponentProps extends ShapeProps { 
  className?: string;
  style?: React.CSSProperties;
  debug?: boolean;
}

const defaultShapeStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
}

const debugShapeStyle: React.CSSProperties = {
  border: '2px dashed cyan',
  boxSizing: 'border-box',
};

export const ShapeComponent: React.FC<ShapeComponentProps> = ({
  className,
  style: customShapeStyle,
  debug,
  ...shapeProps
}) => {
  const [rootNode, setRootNode] = useState<HTMLDivElement | null>(null);

  const onRefChange = useCallback((node: HTMLDivElement) => {
    setRootNode(node);
  }, []);

  useEffect(() => {
    if (!rootNode) return;

    rootNode.textContent = '';

    const { stroke } = shapeProps;

    drawShape({
      ...shapeProps,
      stroke: typeof stroke === 'string' ? stroke : {  
        // You can use CSS's color property for this:      
        color: 'currentColor',
        // You can use CSS's font-size property for this:
        width: '1em' as any,
        ...stroke,
      },
      element: rootNode,
    });
  }, [rootNode, shapeProps]);

  const style: React.CSSProperties = {
    ...defaultShapeStyle,
    ...(debug ? debugShapeStyle : {}),
    ...customShapeStyle,
  };

  return (
    <div
      ref={ onRefChange }
      className={ className }
      style={ style } />
  );
};

import { ShapeComponent, ShapeKind, StyleProps } from '../../lib/shapelib';

type BackgroundBlobProps = StyleProps & {
  numPoints: number;
};

export const BackgroundBlob = ({ numPoints, ...styleProps }: BackgroundBlobProps) => {
  const shapeProps = {
    kind: ShapeKind.CLOSED,
    complexity: numPoints,
  };

  return <ShapeComponent {...shapeProps} {...styleProps} />;
};

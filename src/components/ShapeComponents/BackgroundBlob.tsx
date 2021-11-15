import { ShapeComponent, ShapeKind, StyleProps } from '../../lib/shapelib';

type BackgroundBlobProps = StyleProps & {
  numPoints: number;
};

export const BackgroundBlob: React.FC<BackgroundBlobProps> = (props) => {
  const shapeProps = {
    kind: ShapeKind.CLOSED,
    complexity: props.numPoints,
  };

  return (
    <div style={{ position: 'relative' }}>
      <ShapeComponent {...shapeProps} {...props} style={{ position: 'absolute' }} />
      {props.children}
    </div>
  );
};

import { ShapeComponent, ShapeKind, StyleProps } from '../../lib/shapelib';
import styles from './BackgroundBlob.module.css';

type BackgroundBlobProps = StyleProps & {
  numPoints: number;
};

export const BackgroundBlob: React.FC<BackgroundBlobProps> = (props) => {
  const { numPoints, ...passThroughProps } = props;
  const shapeProps = {
    kind: ShapeKind.CLOSED,
    complexity: numPoints,
    variability: 60,
  };

  return (
    <div className={styles.container}>
      <ShapeComponent {...shapeProps} {...passThroughProps} className={styles.shape} />
      <div className={styles.contents}>{props.children}</div>
    </div>
  );
};

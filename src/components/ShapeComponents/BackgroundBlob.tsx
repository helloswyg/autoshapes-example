import { ShapeComponent, ShapeKind, StyleProps } from '../../lib/shapelib';
import styles from './BackgroundBlob.module.css'

type BackgroundBlobProps = StyleProps & {
  numPoints: number;
};

export const BackgroundBlob: React.FC<BackgroundBlobProps> = (props) => {

  const shapeProps = {
    kind: ShapeKind.CLOSED,
    complexity: props.numPoints,
  };

  return (
    <div className={styles.container}>
      <ShapeComponent {...shapeProps} {...props} className={styles.shape} />
      <div className={styles.contents}>
      {props.children}
      </div>
    </div>
  );
};

import { PathProps, ShapeComponent, ShapeKind, StyleProps } from '../../lib/shapelib';
import styles from './BackgroundBlob.module.css';

type BackgroundBlobProps = StyleProps & {
  numPoints: number;
};

export const BackgroundBlob: React.FC<BackgroundBlobProps> = (props) => {
  const { numPoints, ...passThroughProps } = props;
  const pathProps: PathProps= {
    kind: ShapeKind.CLOSED,
    complexity: numPoints,
    variability: 50,
    smoothness: .8
  };

  return (
    <div className={styles.container}>
      <ShapeComponent {...pathProps} {...passThroughProps} className={styles.shape} />
      <div className={styles.contents}>{props.children}</div>
    </div>
  );
};

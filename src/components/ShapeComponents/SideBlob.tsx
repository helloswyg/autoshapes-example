import { ShapeComponent, ShapeKind, ShapeProps } from '../../lib/shapelib';
import styles from './SideBlob.module.css';

export const SideBlob: React.FC<Partial<ShapeProps>> = (props) => (
  <ShapeComponent
    {...props}
    kind={ShapeKind.CLOSED}
    complexity={7}
    variability={50}
    className={styles.sideblob}
    stroke="none"
    fill="#bbb3"
  />
);

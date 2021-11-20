import { ShapeComponent, ShapeKind, ShapeProps } from '../../lib/shapelib';
import { decodePathString, evaluateTree } from '../../lib/shapelib/grammar';
import styles from './VariableLine.module.css';

interface VariableLineProps extends Partial<ShapeProps> {
  pathString: string;
}

export const VariableLine: React.FC<VariableLineProps> = (props) => {
  const tree = decodePathString(props.pathString);
  const path = evaluateTree(tree);
  return <ShapeComponent {...props} path={path} kind={ShapeKind.LOOPY} className={styles.shape} fill="none" />;
};

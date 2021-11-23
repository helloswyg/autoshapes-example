import { ShapeComponent, ShapeKind, ShapeProps } from '../../lib/shapelib';
import { decodePathString, evaluateTree } from '../../lib/shapelib/grammar';
import styles from './VariableLine.module.css';

interface VariableLineProps extends Partial<ShapeProps> {
  pathString: string;
}

export const VariableLine: React.FC<VariableLineProps & React.HTMLAttributes<HTMLElement>> = (props) => {
  const {pathString, ...rest} = props
  const tree = decodePathString(pathString);
  const path = evaluateTree(tree);
  return <ShapeComponent {...rest} path={path} kind={ShapeKind.LOOPY} className={styles.shape} fill="none" />;
};

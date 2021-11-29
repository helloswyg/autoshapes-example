import { ShapeKind } from '..';
import { ShapeComponent, ShapeComponentProps } from './ShapeComponent';

export type LineProps = Omit<ShapeComponentProps, 'kind'>;

export const Line: React.FC<LineProps> = (props) => <ShapeComponent kind={ShapeKind.LOOPY} {...props} />;

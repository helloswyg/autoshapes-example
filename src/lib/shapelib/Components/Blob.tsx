import { ShapeKind } from '..';
import { ShapeComponent, ShapeComponentProps } from './ShapeComponent';

export type BlobProps = Omit<ShapeComponentProps, 'kind'>

export const Blob: React.FC<BlobProps> = (props) => (
    <ShapeComponent kind={ShapeKind.CLOSED} {...props}/>
)

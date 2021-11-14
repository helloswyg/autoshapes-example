import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import { ShapeComponent, ShapeKind } from '../../lib/shapelib';
import { simpleLinearGradient } from '../../lib/shapelib/utils';

type AccentBlobsExampleProps = {
  title: ReactNode;
  subTitle: ReactNode;
  buttons?: ReactNode;
  lineColor?: string;
};

const shapeProps = {
  kind: ShapeKind.CLOSED,
  complexity: 4,
  stroke: { color: '#ff1b5f', width: 3 },
  fill: simpleLinearGradient(['red', 'blue'])
};

export const AccentBlobsExample = () => {
  return ( 
    <div className="example">
      <ShapeComponent {...shapeProps} style={{ position: 'absolute', maxWidth: '80%', marginTop: '-3em' }} />
    </div>
  );
};

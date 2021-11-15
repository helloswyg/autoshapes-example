import { Grid, Paper, Paper, Typography } from '@mui/material';
import { ReactNode, FC } from 'react';
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
  fill: simpleLinearGradient(['red', 'blue']),
};

const Item: FC<{}> = props => (
  <Paper>{props.children}</Paper>
)

export const AccentBlobsExample = () => {
  return (
    <div className="example">
      {/* <ShapeComponent {...shapeProps} style={{ position: 'absolute', maxWidth: '80%', marginTop: '-3em' }} /> */}
      <Grid container spacing={2}>
  <Grid item xs={8}>
item1
  </Grid>
  <Grid item xs={8}>
    item 2
  </Grid>
</Grid>
    </div>
  );
};

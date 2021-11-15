import { Grid, Paper, Typography } from '@mui/material';
import { ReactNode, FC } from 'react';
import { ShapeComponent, ShapeKind } from '../../lib/shapelib';
import { simpleLinearGradient } from '../../lib/shapelib/utils';
import { BackgroundBlob } from '../ShapeComponents/BackgroundBlob';

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

const Item: FC<{}> = (props) => <Paper>{props.children}</Paper>;

export const AccentBlobsExample = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <BackgroundBlob numPoints={5}>hello</BackgroundBlob>
      </Grid>
      <Grid item xs={4}>
        <BackgroundBlob numPoints={3}>hello</BackgroundBlob>
      </Grid>
    </Grid>
  );
};

{
  /* <ShapeComponent {...shapeProps} style={{ position: 'absolute', maxWidth: '80%', marginTop: '-3em' }} /> */
}

import { Grid, Typography } from '@mui/material';
import { simpleLinearGradient } from '../../lib/shapelib/utils';
import { BackgroundBlob } from '../ShapeComponents/BackgroundBlob';

const Item: React.FC<{}> = (props) => <div style={{ padding: '3rem' }}>{props.children}</div>;
const baseColor = '#ff1b5f';

export const AccentBlobsExample = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
      <div><Typography variant='h2'>Background shapes</Typography></div>

      </Grid>
      <Grid item xs={4}>
        <BackgroundBlob numPoints={5} stroke={{ color: baseColor, width: 3, opacity: 0.6 }} fill="none">
          <Item>
            <Typography variant="h4">Outline only</Typography>
            <Typography variant="body1">Use small shapes in the background of text or other elements.</Typography>
          </Item>
        </BackgroundBlob>
      </Grid>
      <Grid item xs={4}>
        <BackgroundBlob numPoints={7} stroke={'none'} fill={baseColor}>
          <Item>
            <Typography variant="h4">Filled</Typography>
            <Typography variant="body1">
              Shapes can be filled, have opacity and re-size with the foreground content.
            </Typography>
          </Item>
        </BackgroundBlob>
      </Grid>
      <Grid item xs={4}>
        <BackgroundBlob
          numPoints={10}
          stroke={'none'}
          fill={simpleLinearGradient([baseColor.concat('65'), baseColor], 90)}
        >
          <Item>
            <Typography variant="h4">Gradient</Typography>
            <Typography variant="body1">
              Shapes can be filled, have opacity and re-size with the foreground content.
            </Typography>
          </Item>
        </BackgroundBlob>
      </Grid>
    </Grid>
  );
};

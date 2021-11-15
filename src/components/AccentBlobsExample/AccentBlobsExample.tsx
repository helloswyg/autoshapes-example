import { Grid } from '@mui/material';
import { BackgroundBlob } from '../ShapeComponents/BackgroundBlob';

const Item: React.FC<{}> = (props) => <div style={{padding:'2em'}}>{props.children}</div>;

export const AccentBlobsExample = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <BackgroundBlob numPoints={5}>
          <Item>hello 1</Item>
          </BackgroundBlob>
      </Grid>
      <Grid item xs={4}>
        <BackgroundBlob numPoints={3}>
        <Item>hello 2</Item>
          </BackgroundBlob>
      </Grid>

      <Grid item xs={4}>
        <BackgroundBlob numPoints={9}>
        <Item>hello 3</Item>
          </BackgroundBlob>
      </Grid>
    </Grid>
  );
};
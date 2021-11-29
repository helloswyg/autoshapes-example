import { useTheme } from '@mui/material';
import { Blob } from '../../lib/shapelib';
import { TextBlock } from '../Base/TextBlock';
import styles from './TextBoxExample.module.css';

const blobProps = {
  stroke: 'none',
  variability: 20,
  complexity: 3,
};

export const TextBoxExample = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main.toString();
  const secondary = theme.palette.secondary.main.toString();
  const secondaryLight = theme.palette.secondary.light.toString();

  return (
    <div style={{ position: 'relative', margin: theme.spacing(20, 2) }}>
      <Blob className={styles.blob1} fill={primary} {...blobProps} />
      <Blob className={styles.blob2} fill={secondary} {...blobProps} complexity={5} />
      <Blob className={styles.blob3} fill={secondaryLight} transform={{ rotate: 20 }} {...blobProps} />
      <TextBlock title="Add color and depth">
        By placing shapes either in fron or behind your content you can add depth without distracting from your content.
      </TextBlock>
    </div>
  );
};

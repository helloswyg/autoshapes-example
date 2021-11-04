import { ShapeTheme } from './lib/shapelib/themedShape';

const themeList: ShapeTheme[] = [
  {
    primary: 'blue',
    secondary: 'red',
    type: 'line',
    complexity: 4,
    fill: { color: 'none' },
    stroke: { color: 'blue', width: 3, opacity: 0.5 },
  },
  {
    primary: 'orange',
    secondary: 'green',
    type: 'closed',
    complexity: 4,
    fill: { color: '#aaaa99' },
    stroke: {},
  },
];

export const getShapeTheme = () => themeList[Math.floor(Math.random() * themeList.length)];

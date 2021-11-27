import { Container, Stack, Typography } from "@mui/material"
import { ShapeComponent, ShapeKind, ShapeProps } from "../../lib/shapelib"
import { ShapeGallery } from "../ShapeComponents/ShapeGallery"

const color = "rgba(255, 121, 30, 0.87)"

const geometricParams:ShapeProps = {
    kind: ShapeKind.CLOSED,
    fill: color
}
const geometricSet = [
    {
        name: 'name1',
        shape: <ShapeComponent  {...geometricParams} complexity={3} />
    },
    {
        name: 'name2',
        shape: <ShapeComponent  {...geometricParams} complexity={4} />
    },
    {
        name: 'name3',
        shape: <ShapeComponent  {...geometricParams} complexity={5} />
    },
    {
        name: 'name4',
        shape: <ShapeComponent  {...geometricParams} complexity={6} />
    },
]

const complexVariableParams:ShapeProps = {
    kind: ShapeKind.CLOSED,
    fill: color,
    complexity:10,
     variability:50,
      smoothness:.5
}
const complexVariableSet = [
    {
        name: 'name1',
        shape: <ShapeComponent {...complexVariableParams}/>
    },
    {
        name: 'name2',
        shape: <ShapeComponent {...complexVariableParams}/>
    },
    {
        name: 'name3',
        shape: <ShapeComponent {...complexVariableParams}/>
    },
    {
        name: 'name4',
        shape: <ShapeComponent {...complexVariableParams}/>
    },
]

export const VariationsGallery = () => {
    return (
        <Container>
            <Typography variant='h2'>Shape Families </Typography>
            <Typography variant='subtitle1'>Shape Families give consistent but unique style throughout your project</Typography>
            <Stack>
                <ShapeGallery title="Simple Geometric Shapes" shapes={geometricSet} />
                <ShapeGallery title="Variable Shapes" shapes={complexVariableSet} />
            </Stack>
        </Container>
    )
}
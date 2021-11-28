import { Container, Stack, Typography } from "@mui/material"
import { ShapeComponent, ShapeKind, ShapeProps } from "../../lib/shapelib"
import { simpleLinearGradient } from "../../lib/shapelib/utils"
import { ShapeGallery } from "../ShapeComponents/ShapeGallery"

const color = "rgba(255, 121, 30, 0.87)"

const geometricParams: ShapeProps = {
    kind: ShapeKind.CLOSED,
    fill: color
}
const geometricSet = [
    {
        name: '3-Point',
        shape: <ShapeComponent  {...geometricParams} complexity={3} />
    },
    {
        name: '4-Point',
        shape: <ShapeComponent  {...geometricParams} complexity={4} />
    },
    {
        name: '5-Point',
        shape: <ShapeComponent  {...geometricParams} complexity={5} />
    },
    {
        name: '6-Point',
        shape: <ShapeComponent  {...geometricParams} complexity={6} />
    },
]

const smoothingParams: ShapeProps = {
    kind: ShapeKind.CLOSED,
    fill: color,
    complexity: 3
}
const smoothingSet = [0, 0.1, 0.5, .8].map((item) => (
    {
        name: `Smoothing=${item}`,
        shape: <ShapeComponent {...smoothingParams} smoothness={item} />
    }
))

const complexVariableParams: ShapeProps = {
    kind: ShapeKind.CLOSED,
    fill: color,
    variability: 50,
    smoothness: .5
}
const complexVariableSet = [3, 3, 10, 10].map((item) => (
    {
        name: 'Random Variant',
        shape: <ShapeComponent {...complexVariableParams} complexity={item} />
    }
))



const fillVariationsParams: ShapeProps = {
    kind: ShapeKind.CLOSED,
    fill: color,
    complexity: 5,
    smoothness: .5
}
const fillVariationsSet = [
    {
        name: 'Outline',
        shape: <ShapeComponent {...fillVariationsParams} fill="none" />
    },
    {
        name: 'Solid Color',
        shape: <ShapeComponent {...fillVariationsParams} />
    },
    {
        name: 'Gradient',
        shape: <ShapeComponent {...fillVariationsParams} fill={simpleLinearGradient(["#000", "#FFF"])} />
    },
    {
        name: 'No Stroke',
        shape: <ShapeComponent {...fillVariationsParams} stroke="none" />
    },
]

export const VariationsGallery = () => {
    return (
        <Container>
            <Typography variant='h2'>Shape Families </Typography>
            <Typography variant='subtitle1'>
                Shape Families give consistent but unique style throughout your project
            </Typography>
            <Stack spacing={2}>
                <ShapeGallery key={1} title="Simple Geometric Shapes" shapes={geometricSet} />
                <ShapeGallery key={2} title="Configure smoothness" shapes={smoothingSet} />
                <ShapeGallery key={3} title="Variable Shapes" shapes={complexVariableSet} />
                <ShapeGallery key={4} title="Variable Style" shapes={fillVariationsSet} />
            </Stack>
        </Container>
    )
}
import { Box, Stack, Typography } from "@mui/material"
import { ReactNode } from "react"
import { Gallery } from "../Base/Gallery/Gallery"

interface ShapeSpec {
    name: string;
    shape: ReactNode
}

export type ShapeGalleryProps = {
    title: string,
    shapes: ShapeSpec[]
}

const ShapeItem = (props:ShapeSpec) => (
    <Stack justifyContent='space-between' alignItems='center' height='100%'>
    <Typography variant='overline'>{props.name}</Typography>
    <div style={{width:'6rem'}}>{props.shape}</div>
    </Stack>
)

export const ShapeGallery = (props:ShapeGalleryProps) => (
    <Gallery title={props.title} items={props.shapes.map(ShapeItem)}/>
)
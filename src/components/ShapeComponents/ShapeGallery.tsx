import { Container, Stack, Typography, useTheme } from "@mui/material"
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

const ShapeItem = (props: ShapeSpec) => {
    const theme = useTheme()
    return (
        <Container sx={{ padding: theme.spacing(2), height: '100%' }}>
            <Stack justifyContent='space-between' alignItems='center' height='100%'>
                <Typography variant='overline'>{props.name}</Typography>
                <div style={{ width: '8rem', margin: 'auto' }}>{props.shape}</div>
            </Stack>
        </Container>
    )
}

export const ShapeGallery = (props: ShapeGalleryProps) => (
    <Gallery title={props.title} items={props.shapes.map(ShapeItem)} />
)
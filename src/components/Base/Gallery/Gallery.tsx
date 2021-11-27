import { Box, Paper, Stack, Typography, useTheme } from "@mui/material"
import { ReactNode } from "react"

export type GalleryProps = {
    title: string;
    items: ReactNode[];
}

const GalleryItem: React.FC<{}> = (props) => {
    const theme = useTheme()
    return (
        <Paper sx={{
            minWidth: '5rem',
            minHeight: '5rem',
            padding: theme.spacing(2)
        }}>
                {props.children}
        </Paper>
    )
}

export const Gallery = (props: GalleryProps) => (
    <>
        <Typography variant="h3">{props.title}</Typography>
        <Stack direction="row" spacing={1} justifyContent="center">
            {props.items.map((item, index) => (
                <GalleryItem key={index}>{item}</GalleryItem>
            ))}
        </Stack>
    </>
)
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material"
import { ReactNode } from "react"

export type GalleryProps = {
    title: string;
    items: ReactNode[];
}

const GalleryItem: React.FC<{}> = (props) => {
    const theme = useTheme()
    return (
        <Paper>
            <Box sx={{
                minWidth: '5rem',
                minHeight: '5rem',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                margin: theme.spacing(1, 2)
            }}>
                {props.children}
            </Box>
        </Paper>
    )
}

export const Gallery = (props: GalleryProps) => (
    <>
        <Typography variant="h3">{props.title}</Typography>
        <Stack direction="row" spacing={1}>
            {props.items.map((item) => (
                <GalleryItem>{item}</GalleryItem>
            ))}
        </Stack>
    </>
)
import { Button, Container, Grid, Paper, Typography, useTheme } from "@mui/material";

export type CodeBlockProps = {
    code: string, 
    docsURL?: string
}

export const CodeBlock = (props: CodeBlockProps) => {
    const theme = useTheme()
    return (
        <>
            <Paper sx={{ padding: theme.spacing(1), margin: theme.spacing(1, 0) }}>
                <Typography variant='code' sx={{whiteSpace:'pre-wrap'}}>
                    {props.code}
                </Typography>
            </Paper>
            <Grid container spacing={1}>
                <Grid item xs={6} />
                <Grid item xs={3}>
                    {props.docsURL ? <Button sx={{ width: '100%' }} variant='outlined' href={props.docsURL}>Read Docs</Button> : ""}
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant='outlined'
                        onClick={() => navigator.clipboard.writeText(props.code)}
                        sx={{ width: '100%' }}
                    >
                        Copy
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}
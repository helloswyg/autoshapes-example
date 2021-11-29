import { Button, Grid, Paper, Typography, useTheme } from "@mui/material";

export type CodeBlockProps = {
    code: string, 
    docsURL?: string
}

export const CodeBlock = (props: CodeBlockProps) => {
    const theme = useTheme()
    return (
        <>
            <Paper sx={{ padding: theme.spacing(1), margin: theme.spacing(1, 0), overflow:'hidden'}}>
                <Typography variant='code' sx={{whiteSpace:'pre-wrap'}}>
                    {props.code}
                </Typography>
            </Paper>
            <Grid container spacing={1}>
                <Grid item md={3} xs={12} sm={6}>
                    {props.docsURL ? <Button size='small' sx={{ width: '100%' }} variant='outlined' href={props.docsURL}>Read Docs</Button> : ""}
                </Grid>
                <Grid item md={3} xs={12} sm={6}>
                    <Button
                        size='small'
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
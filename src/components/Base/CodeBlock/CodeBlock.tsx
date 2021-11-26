import { Button, Paper, Typography, useTheme } from "@mui/material";

export type CodeBlockProps = {
    code: string, docsURL?: string
}

export const CodeBlock = (props: CodeBlockProps) => {
    const theme = useTheme()
    return (
        <>
            <Paper sx={{ padding: theme.spacing(4), margin: theme.spacing(4,0) }}>
                <Typography variant='code'>
                    {props.code}
                </Typography>
            </Paper>
            <Button
                variant='outlined'
                onClick={() => navigator.clipboard.writeText(props.code)}
            >
                Copy
            </Button>
            {props.docsURL ? <Button variant='outlined' href={props.docsURL}>Read Docs</Button> : ""}
        </>
    )
}
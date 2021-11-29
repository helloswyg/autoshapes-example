import { Container, Grid, Typography } from "@mui/material"
import { CodeBlock } from "../Base/CodeBlock"



const reactCode = 
`import ShapeComponent from shapelib
export const MyComponent = () => (
    <ShapeComponent type="blob"/>
    ...
)
`

const plainJSCode = 
`<script .../>

shapelib.draw(target, params, ...)


`

export type HowToBlockProps = {
    title:string, code:string, url:string
}
const HowToBlock = (props:HowToBlockProps) => {
    const {title, code, url} = props
    return(
    <>
    <Typography variant='h3'>{title}</Typography>
    <CodeBlock code={code} docsURL={url}/>
    </>
    )
}

export const HowTo = () => {
    return (
    <Container>
    <Grid container spacing={4} sx={{textAlign:'left'}}>
        <Grid item xs={12} md={6}>
            <HowToBlock 
            title="React JS"
            code={reactCode}
            url="https://github.com/helloswyg/autoshapes-example"/>
        </Grid>
        <Grid item xs={12} md={6}>
        <HowToBlock 
            title="Plain JS"
            code={plainJSCode}
            url="https://github.com/helloswyg/autoshapes-example"/>
        </Grid>
    </Grid>
    </Container>
)}
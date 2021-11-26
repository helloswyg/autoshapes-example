import { Typography } from "@mui/material"
import { ReactNode } from "react"

export type HowToProps = {
    title: ReactNode,
    codeText: ReactNode,
    docURL: string  
}

export const HowTo = (props:HowToProps) => (
    <>
    <Typography variant='h3'>{title}</Typography>
    
    </>
)
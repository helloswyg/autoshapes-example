import { Button, Slider, TextField } from "@mui/material"
import { useState } from "react"
import { decodePathString, generateLinish } from "../../lib/shapelib/grammar"
import { VariableLine } from "../ShapeComponents/VariableLine"

export const LineExample = () => {
    const [complexity, setComplexity] = useState(4)
    const [pathString, setPathString] = useState(generateLinish(complexity))

    return (
        <>
            <VariableLine pathString={pathString} />
            <div>{pathString}</div>
            <Slider
                value={complexity}
                onChange={(e, v) => setComplexity(v as number)}
                aria-label="Complexity"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={10}
            />
            <Button onClick={() => setPathString(generateLinish(complexity))}>Generate</Button>
        </>
    )
}
import { FillData, Gradient, MatrixAlias, PathArray, StrokeData, SVG, Svg } from "@svgdotjs/svg.js";

export type ShapeProps = {
    type: "wavy" | "loopy" | "closed",
    complexity: number,
    smoothness: number, 
    variability: number,
    seed: number,
}

export type StyleProps = {
    fill: FillData;
    stroke: StrokeData;
    // gradient?: { type: string; block?: (stop: Gradient) => void };
    transform?: MatrixAlias;
}

export type Element = {
    element: HTMLElement | string
}

export type DrawShapeProps = Element & ShapeProps & StyleProps


export function getShape(props: ShapeProps){

    switch (props.type) {
        case "closed":
            break;
        case "wavy":
            break;
        default:
            break;
    }
    return new PathArray()
}

export function drawShape(props: DrawShapeProps){
    const draw: Svg = SVG().addTo(props.element).size('100%', '100%');
    let pathArray=getShape({...props})
    
    const path = draw.path(pathArray)
        .fill(props.fill)
        .stroke(props.stroke);
        
    return path;
}
import React, { useEffect, useRef } from "react";
import { useCanvas } from "../../hooks/useCanvas";
import { CanvasProps } from "./types";

export default (props: CanvasProps) => {
    const canvasRef  = useCanvas();

    return (
        <canvas 
            ref={canvasRef}
            width={props.width} 
            height={props.heigth}
            style={{
                border: '2px solid black',
            }}

        />
    )
} 
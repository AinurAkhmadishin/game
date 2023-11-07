import { useEffect, useRef } from "react";

export const useCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const aaa = [1, 2, 3];

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        let animationID: number;
        if(context) { 
            context.font = "24px Vendetta";
            const renderer = () => {    
                aaa.map((num, i) => {
                    context.strokeRect(i * 5 * 10, 20, 50, 50)
                    context.fillText(`${num}`, i * 6 * 10, 50)
                })
                // context.strokeRect(10, 10, 20, 20);
                // context.strokeRect(50, 50, 20, 20);
                animationID = window.requestAnimationFrame(renderer);
                //context.clearRect(0, 0, 800, 500);
        }
        renderer();
        context.clearRect(0, 0, 800, 500);
        }

        return () => {
            window.cancelAnimationFrame(animationID);
        }
    }, []);

    return canvasRef;
} 
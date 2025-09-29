"use client";

import { radialGradient } from "motion/react-client";
import { useEffect, useState } from "react";

export const TargetBlur = () => {
    const [mask, setMask] = useState("radial-gradient(circle 1000px at 500px 500px, transparent 10%, black 0%)");

    useEffect(() => {
        const sequence = [
            { x: 50, y: 50, r: 1000 },
            { x: 80, y: 30, r: 1000 },
            { x: 30, y: 70, r: 1000 },
        ]; 

        let i = 0;
        const interval = setInterval(() => {
            const { x, y, r } = sequence[i % sequence.length];
            setMask(`radial-gradient(circle ${r}px at ${x}% ${y}%, transparent 10%, black 0%)`);
            i++;
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const maskStyle = "radial-gradient(circle 1000px at 500px 500px,transparent 10%,black 0%) ";
    return (
        <>
            <div
                className="absolute inset-0 h-full w-screen backdrop-blur-xs"
                style={{
                    WebkitMaskImage: mask,
                    maskImage: mask,
                }}
            />
        </>
    );
};

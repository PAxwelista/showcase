"use client";

import Image from "next/image";
import webOutline from "@/../public/web_outline.png";
import { motion } from "motion/react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

type Props = {
    images: string[];
};

export const WebMockup = ({ images }: Props) => {
    const items = images.map((image, i) => (
        <Image
            key={i}
            src={image}
            alt={`screen-${i}`}
            width={320}
            height={640}
            className="w-full h-full object-cover"
            onDragStart={e => e.preventDefault()}
        />
    ));

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="absolute w-full h-screen flex items-center justify-center"
        >
            <div className="absolute w-8/10 max-h-[1000px] aspect-[10/15]">
                <Image
                    src={webOutline}
                    alt="phone frame"
                    fill
                    className="object-contain z-20 pointer-events-none"
                    priority
                />
                <div className="absolute top-[29%] left-[1.1%] right-[1%] bottom-[25%] overflow-hidden z-10 hover:cursor-pointer">
                    <AliceCarousel
                        mouseTracking
                        items={items}
                    />
                </div>
            </div>
        </motion.div>
    );
};

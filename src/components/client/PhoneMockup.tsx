"use client";

import Image from "next/image";
import phoneOutile from "@/../public/phone_outline.png";
import { motion } from "motion/react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';

type Props = {
    images: string[];
};

export const PhoneMockup = ({ images }: Props) => {
    const items = images.map((image, i) => (
        <Image
            key={i}
            src={image}
            alt={`screen-${i}`}
            width={320}
            height={640}
            className="w-full h-full object-cover"
            draggable={false}
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
            <div className="absolute w-8/10 max-h-[500px] aspect-[9/19.5]">
                <Image
                    src={phoneOutile}
                    alt="phone frame"
                    fill
                    className="object-contain z-20 pointer-events-none"
                    priority
                />
                <div
                    onClick={() => console.log("test")}
                    className="absolute top-[6%] left-[4%] right-[5%] bottom-[6%] rounded-[10%] z-10 overflow-hidden hover:cursor-pointer"
                >
                    <AliceCarousel mouseTracking items={items} />

                </div>
            </div>
        </motion.div>
    );
};

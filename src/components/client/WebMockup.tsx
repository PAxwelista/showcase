import Image from "next/image";
import webOutline from "@/../public/web-outline.png";
import { motion } from "motion/react";
type Props = {
    images: string[];
};

export const WebMockup = ({ images }: Props) => {
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
            <div className="absolute w-full max-h-[1000px] aspect-[9/19.5]">
                <Image
                    src={webOutline}
                    alt="phone frame"
                    fill
                    className="object-contain z-20 pointer-events-none"
                    priority
                />
                <div className="absolute top-[31%] left-[1.5%] right-[1.2%] bottom-[29%] overflow-hidden z-10">
                <motion.div
                        className="flex h-full cursor-grab"
                        drag="x"
                        dragConstraints={{ left: -((images.length - 1) * 320), right: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 30 }}
                    >
                        {images.map((image, i) => (
                            <Image
                                key={i}
                                src={image}
                                alt={`screen-${i}`}
                                width={320}
                                height={640}
                                className="w-[320px] h-full object-cover flex-shrink-0"
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

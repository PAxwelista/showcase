import Image from "next/image";
import phoneOutile from "@/../public/phone-outline.png";
import { motion } from "motion/react";
type Props = {
    children: React.ReactNode;
};

export const PhoneMockup = ({ children }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{once:true, amount: 0.5 }}
            className="absolute w-full h-screen flex items-center justify-center"
        >
            <div className="absolute w-full max-h-[500px] aspect-[9/19.5]">
                <Image
                    src={phoneOutile}
                    alt="phone frame"
                    fill
                    className="object-contain z-20 pointer-events-none"
                    priority
                />
                <div className="absolute top-[6%] left-[4%] right-[5%] bottom-[6%] rounded-[10%] overflow-hidden z-10">
                    {children}
                </div>
            </div>
        </motion.div>
    );
};

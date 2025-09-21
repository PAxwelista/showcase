import { PhoneMockup, WebMockup } from "./";
import Image from "next/image";
import { motion } from "motion/react";

type Props = {
    title: string;
    description: string;
    btnTitle: string;
    onClick: React.MouseEventHandler;
    webProject: boolean;
    picturesUrl: string[];
};

export const Project = (props: Props) => {
    const { title, description, btnTitle, onClick, webProject, picturesUrl } = props;

    const handleOnClick = (event: React.MouseEvent) => {
        onClick(event);
    };

    return (
        <div className="flex">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex flex-col flex-1 p-5"
            >
                <h3>{title}</h3>
                <p>{description}</p>
                <button onClick={handleOnClick}>{btnTitle}</button>
            </motion.div>
            <div className="flex flex-1">
                <div className="relative flex-3 w-full h-screen">
                    {webProject ? <WebMockup images={picturesUrl} /> : <PhoneMockup images={picturesUrl} />}
                    <div className="absolute flex w-full h-full">
                        <div className="flex-1 "></div>
                        <div className="flex-1 bg-blue-300 -z-10"></div>
                    </div>

                    <div className="absolute flex w-full h-full">
                        <div className="flex-1 "></div>
                        <div className="flex-1 bg-blue-300 -z-10"></div>
                    </div>
                </div>
                <div className="flex-1 bg-blue-300"></div>
            </div>
        </div>
    );
};

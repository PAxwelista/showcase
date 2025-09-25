import { Btn, PhoneMockup, WebMockup } from "./";
import Image from "next/image";
import { motion } from "motion/react";

type Props = {
    title: string;
    description: string;
    btnTitle: string;
    href: string | null;
    webProject: boolean;
    picturesUrl: string[];
};

export const Project = (props: Props) => {
    const { title, description, btnTitle, href, webProject, picturesUrl } = props;

    return (
        <div className="flex flex-col md:flex-row">
            <motion.div
                initial={{ opacity: 0, x: -40 }}
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
                {href && <a className="self-end cursor-pointer p-2 px-4 bg-blue-500 rounded-2xl duration-200 active:scale-95 hover:scale-110" href={href}>{btnTitle}</a>}
            </motion.div>
            <div className="flex flex-1">
                <div className="relative flex-3 w-full h-screen">
                    {webProject ? <WebMockup images={picturesUrl} /> : <PhoneMockup images={picturesUrl} />}
                   
                    <div className="absolute flex w-full h-full">
                        <div className="flex-1 "></div>
                        <div className="flex-1 bg-blue-300 -z-10"></div>
                    </div>
                </div>
                <div className="flex-1 bg-blue-300 hidden md:block"></div>
            </div>
        </div>
    );
};

"use client";

import Image from "next/image";
import profile from "@/../public/profile.jpg";
import { useT } from "@/app/i18n/client";
import { TargetBlur } from "./";

export const About = () => {
    const { t } = useT("about");

    return (
        <div className="flex flex-col p-3 min-h-screen pt-20 items-center justify-center">
            <h2>{t("presentation")}</h2>

            <div className="sm:flex p-4 sm:p-10 items-center">
                <div className="h-50 w-50 rounded-full overflow-hidden" >
                    <Image
                        src={profile}
                        width={300}
                        height={300}
                        className="relative left-4 bottom-2 scale-120"
                        alt="Picture of the author"
                    />
                </div>
                <p className="flex-3 p-3 sm:p-20 whitespace-pre-line">{t("paragraphe-about")}</p>
            </div>
            {/* <TargetBlur/> */}
        </div>
    );
};

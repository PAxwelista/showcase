"use client";

import Image from "next/image";
import profile from "@/../public/profile.jpg";
import { useT } from "@/app/i18n/client";

export const About = () => {
    const { t } = useT("about");

    return (
        <div className="sm:flex flex-col p-3 min-h-screen pt-20 items-center justify-center">
            <h2>{t("presentation")}</h2>

            <div className="flex p-4 sm:p-10">
                <Image
                    src={profile}
                    width={100}
                    height={100}
                    className="object-contain"
                    alt="Picture of the author"
                />
                <p className="p-10">{t("paragraphe-about")}</p>
            </div>
        </div>
    );
};

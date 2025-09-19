import { getT } from "@/app/i18n";
import Image from "next/image";
import profile from "@/../public/profile.jpg"

export const About = async () => {
    const { t } = await getT("about");

    return (
        <div className="sm:flex p-3 min-h-screen pt-20 items-center">
            <Image
                src={profile}
                width={100}
                height={100}
                alt="Picture of the author"
            />
            <div className="p-4 sm:p-10">
                <h2>{t("presentation")}</h2>
                <p>{t("paragraphe-about")}</p>
            </div>
        </div>
    );
};

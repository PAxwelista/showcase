"use client";

import { useT } from "@/app/i18n/client";

export const Contact = () => {
    const { t } = useT("contact");
    return (
        <div className="min-h-screen">
            <h2>{t("contact")}</h2>
            <ul className="flex-col flex justify-center items-center m-5">
                <li>{t("email")} : madotto.axel@gmail.com</li>
                <li>
                    <a href="https://www.linkedin.com/in/axel-madotto-16391b125">{t("linkedin")}</a>
                </li>
                <li>
                    <a href="https://github.com/PAxwelista">{t("github")}</a>
                </li>
            </ul>
        </div>
    );
};

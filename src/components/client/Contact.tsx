"use client";

import { useT } from "@/app/i18n/client";
import { motion } from "motion/react";

export const Contact = () => {
    const { t } = useT("contact");
    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="min-h-screen"
        >
            <h2>{t("contact")}</h2>
            <ul className="flex-col flex justify-center items-center m-5">
                <li>{t("email")} : madotto.axel@gmail.com</li>
                <li>
                    <a className="underline text-blue-400 hover:text-blue-300" href="https://www.linkedin.com/in/axel-madotto-16391b125">{t("linkedin")}</a>
                </li>
                <li>
                    <a className="underline text-blue-400 hover:text-blue-300"  href="https://github.com/PAxwelista">{t("github")}</a>
                </li>
            </ul>
        </motion.div>
    );
};

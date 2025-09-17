'use client'

import { useT } from "@/app/i18n/client";

export  const Header = ()=> {
    const { t } = useT("common");
    return (
        <div className="bg-blue-400">
            <p>Axel Madotto</p>
            <p>{t("home")}</p>
        </div>
    );
};

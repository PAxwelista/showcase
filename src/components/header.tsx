"use client";

import { useT } from "@/app/i18n/client";
import { DropDown, HeaderBtn } from ".";
import { useIsMobile } from "@/hooks/useIsMobile";

export const Header = () => {
    const { t } = useT("header");
    const isMobile = useIsMobile();

    const HeaderBtns = () => {
        return (
            <>
                <HeaderBtn>{t("projects")}</HeaderBtn>
                <HeaderBtn>{t("labs")}</HeaderBtn>
                <HeaderBtn>{t("contact")}</HeaderBtn>
            </>
        );
    };

    return (
        <div className="bg-blue-400 flex justify-between p-5">
            <HeaderBtn onClick={() => console.log("cli")}>Axel Madotto</HeaderBtn>
            {isMobile ? (
                <DropDown>
                    <HeaderBtns />
                </DropDown>
            ) : (
                <div className="flex">
                    <HeaderBtns />
                </div>
            )}
        </div>
    );
};

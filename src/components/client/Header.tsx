"use client";

import { useT } from "@/app/i18n/client";
import { DropDown, HeaderBtn } from ".";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useIsTopScroll } from "@/hooks/useIsTopScroll";
export const Header = () => {
    const { t } = useT("header");
    const isMobile = useIsMobile();
    const isTop = useIsTopScroll();

    console.log(isTop);

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
        <div className={`duration-300 ease-in fixed flex justify-between w-screen px-5 ${isTop ? "bg-blue-400 p-5" : "bg-blue-600 p-2"}`}>
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

"use client";

import { useT } from "@/app/i18n/client";
import { DropDown, HeaderBtn } from ".";
import { useIsTopScroll } from "@/hooks/useIsTopScroll";

type Props = { onClickAbout: () => void; onClickProject: () => void; onClickContact: () => void };

export const Header = ({ onClickAbout, onClickProject, onClickContact }:Props) => {
    const { t } = useT("header");
    const isTop = useIsTopScroll();

    const HeaderBtns = () => {
        return (
            <>
                <HeaderBtn onClick={onClickProject}>{t("projects")}</HeaderBtn>
                <HeaderBtn onClick={onClickContact}>{t("contact")}</HeaderBtn>
            </>
        );
    };

    return (
        <div
            className={`duration-300 ease-in fixed z-50 flex justify-between w-screen px-5 ${
                isTop ? "bg-blue-400 p-5" : "bg-blue-600 p-2"
            }`}
        >
            <HeaderBtn onClick={onClickAbout}>Axel Madotto</HeaderBtn>

            <div className="block md:hidden">
                <DropDown>
                    <HeaderBtns />
                </DropDown>
            </div>

            <div className="flex hidden md:block">
                <HeaderBtns />
            </div>
        </div>
    );
};

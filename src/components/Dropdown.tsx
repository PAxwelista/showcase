"use client";

import { useState } from "react";
import { HeaderBtn } from "./HeaderBtn";

type Props = {children : React.ReactNode}

export const DropDown = ({children} : Props) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleOnClick = () => {
        setShowModal(prev => !prev);
    };

    return (
        <div>
            <HeaderBtn onClick={handleOnClick}>=</HeaderBtn>
            {showModal&&<div className="flex flex-col absolute  bg-red-200 right-2">
                {children}
            </div>}
        </div>
    );
};

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
        <>
            <HeaderBtn onClick={handleOnClick}>=</HeaderBtn>
            {showModal&&<div className="flex flex-col absolute bg-blue-300 right-2 p-2 rounded-xl right-5">
                {children}
            </div>}
        </>
    );
};

"use client"

import { useEffect, useState } from "react";

export function useIsTopScroll(){

    const [isTop, setIsTop] = useState<boolean>(true);

    useEffect(()=>{

        const handleScroll = () => {
            setIsTop(window.scrollY === 0);
          };
    
        window.addEventListener("scroll", handleScroll);
    
        handleScroll();

    } , [])




    return isTop
}
"use client";

export const HeaderBtn = (
    props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) => {
    return (
        <button
            className="px-2 cursor-pointer mx-2 duration-200 ease-in-out hover:scale-110 hover:text-black active:scale-95"
            {...props}
        />
    );
};

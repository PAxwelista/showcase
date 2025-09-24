type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isSelected: boolean;
};

export const SelectedBtn = ({ isSelected, ...props }: Props) => {
    return (
        <button
            className={`px-2 m-4 shadow-[-2px_2px_2px] hover:shadow-[-4px_4px_4px] active:shadow-[-1px_1px_1px]  dark:shadow-white shadow-black cursor-pointer mx-2 bg-blue-500 h-10 w-30 rounded-full ease-in-out duration-200 active:scale-95 hover:scale-110 ${isSelected && "bg-blue-800"}`}
            {...props}
        ></button>
    );
};

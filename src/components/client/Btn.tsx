type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Btn = (props: Props) => {
    const { className, ...otherProps } = props;
    return (
        <button
            className={
                `text-white px-2 cursor-pointer mx-2 h-8 bg-blue-500 rounded-full duration-200 active:scale-95 hover:scale-110 ` +
                className
            }
            {...otherProps}
        />
    );
};

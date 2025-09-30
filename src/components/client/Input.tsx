type Props = {
    title: string;
    name:string
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ title,name, value, onChange }: Props) => {
    
    return (
        <div className="flex m-2">
            <p className="mr-4 flex-1">{title} : </p>
            <input
                className="flex-1 dark:bg-stone-800 px-3 border rounded-md"
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

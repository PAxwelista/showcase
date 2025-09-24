import { SelectedBtn } from "./SelectedBtn";

type Props = {
    btnsName: string[];
    selectedBtn: string;
    onSelect: (btnName: string) => void;
};

export const SelectedBtns = ({ btnsName, selectedBtn, onSelect }: Props) => {
    const handleClick = (btnName: string) => {
        onSelect(btnName);
    };

    return (
        <div className="flex flex-col items-center">
            {btnsName.map(btnName => (
                <SelectedBtn
                    key={btnName}
                    onClick={() => handleClick(btnName)}
                    isSelected={selectedBtn === btnName}
                >
                    {btnName}
                </SelectedBtn>
            ))}
        </div>
    );
};

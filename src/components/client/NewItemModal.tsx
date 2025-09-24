import { useT } from "@/app/i18n/client";
import { Btn, Input } from ".";

type Props = {
    visible: boolean;
    values: Record<string, string>;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClose: () => void;
    onAddItem: () => void;
};

export const NewItemModal = ({ visible, values, onChange, onClose, onAddItem }: Props) => {
    const { t } = useT("inventory");

    const inputs = Object.entries(values).map(([key, value]) => (
        <Input
            key={key}
            name={key}
            title={t(key)}
            value={value}
            onChange={onChange}
        />
    ));

    return (
        visible && (
            <div className="fixed flex h-full w-full bg-black/50 justify-center items-center">
                <div className="relative bg-white dark:bg-black border-1 p-10 rounded-lg">
                    <h2>{t("new_item")}</h2>
                    <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
                        {inputs}
                        <Btn
                            className="mt-8"
                            onClick={onAddItem}
                        >
                            {t("add")}
                        </Btn>
                    </form>
                    <Btn
                        className="absolute right-2 top-4 h-8 w-8"
                        onClick={onClose}
                    >
                        x
                    </Btn>
                </div>
            </div>
        )
    );
};

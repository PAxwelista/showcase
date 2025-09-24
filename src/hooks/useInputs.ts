import { useState } from "react";

export function useInputs(initialInputs: Record<string, string>) {
    const [values, setValues] = useState<Record<string, string>>(initialInputs);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        setValues(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const reset = () => {
        setValues(initialInputs);
    };

    return [values, onChange, reset] as const
}

import { useEffect, useState } from "react";

type UseFetchResult<T> = {
    data: T | null;
    error: string | null;
    isLoading: boolean;
};

export function useFetch<T = unknown>(url: string, options: RequestInit): UseFetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string|null>(null);

    useEffect(() => {
        setIsLoading(true);

        (async () => {
            try {
                const response = await fetch(url, options);

                const json = await response.json();

                if ("error" in json) setError(json.message);

                setData(json);
            } catch (error) {
                setError(typeof error === "string" ? error : "error");
            } finally {
                setIsLoading(false);
            }
        })();
    }, [url,options]);

    return { data, isLoading, error };
}

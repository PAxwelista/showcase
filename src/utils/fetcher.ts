export async function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
    try {
        const res = await fetch(url, options);

        const data = await res.json();

        return data
    } catch (error) {
        throw new Error(typeof error === "string" ? error : "unknow error");
    }
}

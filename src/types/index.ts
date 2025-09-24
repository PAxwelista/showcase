export type Item = {
    app_user_id: string;
    created_at: Date;
    delete_at: Date | null;
    id: number;
    name: string;
    options: {};
    quantity: number;
};

export type JsonError = {
    statusCode : number;
    error : string;
    message : string | string[]
}
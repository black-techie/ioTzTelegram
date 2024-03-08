interface User {
    id: number;
    userId: number;
    is_bot: boolean;
    first_name: string;
    language_code: string;
    relations?: object[]
}



export type {
    User
}
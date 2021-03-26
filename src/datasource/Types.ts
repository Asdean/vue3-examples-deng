export interface User {
    id?: number;
    name?: string;
    address?: string;
    insertTime?: string;
    level?: number;
    sex?: string;
    title?: Title;
    courses?: Course[];
}

export interface Title {
    id?: number;
    name?: string;
}

export interface Course {
    id?: number;
    name?: string;
    createTime?: string;
}
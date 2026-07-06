export interface LoginApiType {
    id: string,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    birthDate: string,
    image: string,
}

export type LoginContextType = {
    users: User[],
    isLoading: boolean,
    error: string,
    addUser: (newUser: User) => void,
}

export interface User {
    id: string,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    birthDate: string,
    image: string,
}

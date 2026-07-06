export interface UserFormState {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    birthDate: string;
    image: File | null;
}

export type UserError = Partial<Record<keyof UserFormState, string>>

export interface FormState {
    error: UserError | null;
    user: UserFormState | null;


}

export type Gender = "Female" | "Male" | "Rather not to say" | "";

import type {Gender, UserFormState} from "../types/user.ts";

export function parseFormData(formData: FormData, file:File | null): UserFormState {
    return {
        id: crypto.randomUUID(),
        username: formData.get("username")?.toString().trim() ?? "",
        email: formData.get("email")?.toString().trim() ?? "" as Gender,
        firstName: formData.get("firstName")?.toString().trim() ?? "",
        lastName: formData.get("lastName")?.toString().trim() ?? "",
        gender: formData.get("gender")?.toString().trim() ?? "",
        birthDate: formData.get("birthday")?.toString().trim() ?? "",
        image: file instanceof File ? file : null,

    }
}
import type {UserError, UserFormState} from "../types/user.ts";

const MAX_IMAGE_SIZE = 2 * 1024 * 1024;

export function validateUser(user: UserFormState): UserError {

    const errors: UserError = {};

    if (user.username.length < 3) {
        errors.username = "Username must be at least 3 characters";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
        errors.email = "Email is invalid";
    }

    if (!user.firstName) {
        errors.firstName = "First name is required";
    }

    if (!user.lastName) {
        errors.lastName = "Last name is required";
    }

    if (!user.gender) {
        errors.gender = "Gender is required";
    }

    if (!user.birthDate) {
        errors.birthDate = "Birth date is required";
    }

    if (!user.image || user.image.size === 0) {
        errors.image = "Image is required";
    } else if (!user.image.type.startsWith("image/")) {
        errors.image = "Only image files are allowed";
    } else if (user.image.size > MAX_IMAGE_SIZE) {
        errors.image = "Image is too large";
    }

    return errors;

}
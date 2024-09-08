export const validatePassword = (password: string): string | null => {
    if (password.length < 8) return "Password must be at least 8 characters";
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`]/.test(password))
        return "Password must include uppercase, lowercase, number, and special character";
    return null;
};
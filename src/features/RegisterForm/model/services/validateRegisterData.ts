import { ValidateRegisterError } from "../types/register";

export const validateRegisterData = (data: any) => {
    if (!data) {
        return [ValidateRegisterError.NO_DATA];
    }

    const { valuePasswordRegister, valueUserNameRegister } = data;

    const errors: ValidateRegisterError[] = [];

    if (
        valuePasswordRegister.length < 10 ||
        valueUserNameRegister.length < 10
    ) {
        errors.push(ValidateRegisterError.INCORRECT_USER_DATA);
    }

    return errors;
};

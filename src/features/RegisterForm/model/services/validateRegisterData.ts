import { ValidateRegisterError } from "../types/register";

export const validateRegisterData = (data: any) => {
    const errors: ValidateRegisterError[] = [];
    try {
        const {
            valuePasswordRegister,
            valueUserNameRegister,
            valueConfirmPasswordRegister,
        } = data;

        if (
            valueUserNameRegister === "" ||
            valuePasswordRegister === "" ||
            valueConfirmPasswordRegister === ""
        ) {
            return [ValidateRegisterError.NO_DATA];
        }
        // console.log("data", data);

        if (
            valuePasswordRegister.length < 10 ||
            valueUserNameRegister.length < 10
        ) {
            errors.push(ValidateRegisterError.INCORRECT_LENGTH);
        }
    } catch (error) {
        errors.push(ValidateRegisterError.SERVER_ERROR);
    }
    return errors;
};

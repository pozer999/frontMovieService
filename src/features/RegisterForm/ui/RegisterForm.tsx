import {
    CheckCircleOutlined,
    LockOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Modal, Select, message } from "antd";
import Checkbox, { CheckboxChangeEvent } from "antd/es/checkbox";
import { getIsRememberMe } from "features/AuthForm/model/selectors/AuthSelectors";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { messageWrapper } from "shared/lib/helpers/messages/message";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { GeneralAuthAndRegisterActions } from "store/generalAuthAndRegister";
import { RegisterActions, register } from "store/modalRegister";
import {
    getConfirmPasswordRegister,
    getError,
    getIsDisabledButtonToRegister,
    getRegisterError,
    getRegisterIsLoading,
    getRegisterIsVisible,
    getUserRegisterName,
    getUserRegisterPassword,
} from "../model/selectors/RegisterSelectors";
import { validateRegisterData } from "../model/services/validateRegisterData";
import { ValidateRegisterError } from "../model/types/register";
import cls from "./RegisterForm.module.scss";

export const RegisterForm = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const dispatch = useAppDispatch();
    const valueUserNameRegister = useSelector(getUserRegisterName);
    const valuePasswordRegister = useSelector(getUserRegisterPassword);
    const valueConfirmPasswordRegister = useSelector(
        getConfirmPasswordRegister
    );
    const isLoadingTheRegisterButton = useSelector(getRegisterIsLoading);
    const errorRegisterValue = useSelector(getError);
    const isRememberMe = useSelector(getIsRememberMe);
    const isDisabledButtonToRegister = useSelector(
        getIsDisabledButtonToRegister
    );
    const isVisibleRegister = useSelector(getRegisterIsVisible);
    const registerError = useSelector(getRegisterError);

    const options = [
        { value: "fanesi", label: "Fanesi" },
        { value: "horrors", label: "Horrors" },
        { value: "fighters", label: "Fighters" },
    ];
    const handleOkRegister = useCallback(() => {
        const isValidate = validateRegisterData({
            valueUserNameRegister,
            valuePasswordRegister,
            valueConfirmPasswordRegister,
        });
        isValidate.length !== 0
            ? messageWrapper(isValidate[0], "error", messageApi)
            : null;

        dispatch(
            register({
                valuePasswordRegister: valuePasswordRegister,
                valueUserNameRegister: valueUserNameRegister,
                isRememberMe: isRememberMe,
            })
        );
    }, [
        dispatch,
        valueUserNameRegister,
        valuePasswordRegister,
        isRememberMe,
        valueConfirmPasswordRegister,
        messageApi,
    ]);

    const handleCloseModalRegister = useCallback(() => {
        dispatch(GeneralAuthAndRegisterActions.closeModalRegister());
    }, [dispatch]);
    const handleSwitchAuthToRegistration = useCallback(() => {
        dispatch(GeneralAuthAndRegisterActions.switchAuthToRegistration());
    }, [dispatch]);
    const handleChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch(RegisterActions.changePasswordRegister(e.currentTarget.value));
    };
    const handleChangeConfirmPassword = (
        e: React.FormEvent<HTMLInputElement>
    ) => {
        dispatch(
            RegisterActions.changeConfirmPasswordRegister(e.currentTarget.value)
        );
    };
    const handleChangeUsername = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch(RegisterActions.changeUserNameRegister(e.currentTarget.value));
    };
    const handleChangeRememberMe = useCallback(
        (e: CheckboxChangeEvent) => {
            dispatch(
                GeneralAuthAndRegisterActions.changeRememberMe(e.target.checked)
            );
            console.log("remember me register: ", e.target.checked);
        },
        [dispatch]
    );

    useEffect(() => {
        if (
            valueUserNameRegister === "" ||
            valuePasswordRegister === "" ||
            valueConfirmPasswordRegister === ""
        ) {
            dispatch(RegisterActions.toggleDisabledButtonToRegister(true));
        } else {
            dispatch(RegisterActions.toggleDisabledButtonToRegister(false));
        }
        console.log("isRememberMeAuth: ", isRememberMe);
    }, [
        isRememberMe,
        dispatch,
        valueUserNameRegister,
        valuePasswordRegister,
        valueConfirmPasswordRegister,
    ]);

    useEffect(() => {
        if (registerError) {
            messageWrapper(
                ValidateRegisterError.SERVER_ERROR,
                "error",
                messageApi
            );
        }
    }, [registerError, messageApi]);

    return (
        <Modal
            open={isVisibleRegister}
            title="Register"
            onCancel={handleCloseModalRegister}
            footer={[]}
        >
            <Form
                name="normal_register"
                className="register-form"
                // initialValues={{ remember: true }}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                    hasFeedback
                >
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Username"
                        allowClear
                        onChange={handleChangeUsername}
                    />
                </Form.Item>
                <>{contextHolder}</>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                        allowClear
                        onChange={handleChangePassword}
                    />
                </Form.Item>
                <Form.Item
                    name="confirm"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (
                                    !value ||
                                    getFieldValue("password") === value
                                ) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error(
                                        "The password that you entered do not match!"
                                    )
                                );
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        prefix={
                            <CheckCircleOutlined className="site-form-item-icon" />
                        }
                        placeholder="Confirm Password"
                        allowClear
                        onChange={handleChangeConfirmPassword}
                    />
                </Form.Item>
                <Form.Item name="Genre" label="Favorites">
                    <Select
                        placeholder="Please choose your favorite genre"
                        mode="multiple"
                        showArrow
                        options={options}
                    ></Select>
                </Form.Item>
                <Form.Item>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            key="submit"
                            loading={isLoadingTheRegisterButton}
                            disabled={isDisabledButtonToRegister}
                            onClick={handleOkRegister}
                            className={cls.buttonToSubmitForm}
                        >
                            Register
                        </Button>
                        <Button
                            type="link"
                            onClick={handleSwitchAuthToRegistration}
                            className={cls.alreadyRegistered}
                        >
                            Already registered?
                        </Button>
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            noStyle
                        >
                            <Checkbox
                                defaultChecked={isRememberMe}
                                checked={isRememberMe}
                                onChange={handleChangeRememberMe}
                                className={cls.checkboxIsRemeberMe}
                            >
                                Remember me
                            </Checkbox>
                        </Form.Item>
                    </div>
                </Form.Item>
            </Form>
        </Modal>
    );
};

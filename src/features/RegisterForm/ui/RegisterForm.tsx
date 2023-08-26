import {
    CheckCircleOutlined,
    LockOutlined,
    UserOutlined,
} from "@ant-design/icons";
import {
    Button,
    Checkbox,
    Form,
    Input,
    Modal,
    Select,
    Space,
    message,
} from "antd";
import { memo, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
    getError,
    getIsRegister,
    getRegisterIsLoading,
    getRegisterIsVisible,
    getUserRegisterName,
    getUserRegisterPassword,
} from "../model/selectors/RegisterSelectors";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { AuthActions, register } from "store/modalAuthAndRegisterReducer";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { getIsRememberMe } from "features/AuthForm/model/selectors/AuthSelectors";

export const RegisterForm = () => {
    const dispatch = useAppDispatch();
    const valueUserNameRegister = useSelector(getUserRegisterName);
    const valuePasswordRegister = useSelector(getUserRegisterPassword);
    const isVisibleRegister = useSelector(getRegisterIsVisible);
    const isLoadingTheRegisterButton = useSelector(getRegisterIsLoading);
    const isRegister = useSelector(getIsRegister);
    const errorRegisterValue = useSelector(getError);
    const isRememberMe = useSelector(getIsRememberMe);
    const options = [
        { value: "fanesi", label: "Fanesi" },
        { value: "horrors", label: "Horrors" },
        { value: "fighters", label: "Fighters" },
    ];
    const handleOkRegister = useCallback(() => {
        dispatch(
            register({
                valuePasswordRegister: valuePasswordRegister,
                valueUserNameRegister: valueUserNameRegister,
                isRememberMe: isRememberMe,
            })
        );
    }, [dispatch, valueUserNameRegister, valuePasswordRegister, isRememberMe]);

    const handleCloseModalRegister = useCallback(() => {
        dispatch(AuthActions.closeModalRegister());
    }, [dispatch]);
    const handleSwitchAuthToRegistration = useCallback(() => {
        dispatch(AuthActions.switchAuthToRegistration());
    }, [dispatch]);
    const handleChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch(AuthActions.changePasswordRegister(e.currentTarget.value));
    };
    const handleChangeUsername = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch(AuthActions.changeUserNameRegister(e.currentTarget.value));
    };
    const handleChangeRememberMe = useCallback(
        (e: CheckboxChangeEvent) => {
            dispatch(AuthActions.changeRememberMe(e.target.checked));
            console.log("remember me register: ",e.target.checked);
            
        },
        [dispatch]
    );

    useEffect(() => {
        console.log("isRememberMeRegister: ", isRememberMe);
    }, [isRememberMe]);

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
                initialValues={{ remember: true }}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Username!",
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
                {/* <>{contextHolder}</> */}
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Password!",
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
                            className="register-form-button"
                            key="submit"
                            loading={isLoadingTheRegisterButton}
                            disabled={isLoadingTheRegisterButton}
                            onClick={handleOkRegister}
                        >
                            Register
                        </Button>
                        <Button
                            type="link"
                            onClick={handleSwitchAuthToRegistration}
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

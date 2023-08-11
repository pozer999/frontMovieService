import {
    CheckCircleOutlined,
    LockOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Modal, Select, Space, message } from "antd";
import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import {
    AuthActions,
    register,
} from "../../../store/modalAuthAndRegisterReducer";

export const RegisterForm = memo(() => {
    const dispatch = useDispatch<AppDispatch>();

    const valueUserNameRegister = String(
        useSelector(
            (state: RootState) =>
                state.modalAuthAndRegisterReducer.valueUserNameRegister
        )
    );
    const valuePasswordRegister = String(
        useSelector(
            (state: RootState) =>
                state.modalAuthAndRegisterReducer.valuePasswordRegister
        )
    );
    const isVisibleRegister = useSelector(
        (state: RootState) =>
            state.modalAuthAndRegisterReducer.isVisibleRegister
    );
    const isLoadingTheRegisterButton = useSelector(
        (state: RootState) =>
            state.modalAuthAndRegisterReducer.isLoadingTheRegisterButton
    );
    const isRegister = String(
        useSelector(
            (state: RootState) => state.modalAuthAndRegisterReducer.isRegister //зареган пользователь или нет
        )
    );
    const errorRegisterValue = useSelector(
        (state: RootState) => state.modalAuthAndRegisterReducer.errorRegister // ошибка при регистрации
    );

    const [statusInputLoginAndPassword, setStatusInputLoginAndPassword] =
        useState<"error" | "warning" | undefined>(undefined);

    // -------------------------------messageApi ----------------------------------------
    const [messageApi, contextHolder] = message.useMessage();

    const insufficientCharactersError = useCallback(() => {
        messageApi.open({
            type: "error",
            content:
                "Your username and password must contain at least 10 characters",
        });
        setStatusInputLoginAndPassword("error");
    }, [messageApi]);

    const errorRegister = useCallback(() => {
        messageApi.open({
            type: "error",
            content: "Registration error",
        });
        setStatusInputLoginAndPassword("error");
    }, [messageApi]);

    const success = useCallback(() => {
        messageApi.open({
            type: "success",
            content: "You are registered",
        });
    }, [messageApi]);
    // ----------------------------------------------------------------------------

    const handleOkRegister = useCallback(() => {
        if (errorRegisterValue) {
            errorRegister(); //ошибка при rejected
        } else {
            if (
                valueUserNameRegister.length >= 10 &&
                valuePasswordRegister.length >= 10
            ) {
                const valueRegister = {
                    valueUserNameRegister,
                    valuePasswordRegister,
                };
                setStatusInputLoginAndPassword(undefined);
                dispatch(register(valueRegister));
                console.log(valueRegister);
                success();
            } else {
                insufficientCharactersError();
            }
        }
    }, [
        dispatch,
        valueUserNameRegister,
        valuePasswordRegister,
        insufficientCharactersError,
        errorRegister,
        errorRegisterValue,
        success,
    ]);

    useEffect(() => {
        if (
            valueUserNameRegister.length >= 10 &&
            valuePasswordRegister.length >= 10
        ) {
            setStatusInputLoginAndPassword(undefined);
        }
    }, [valueUserNameRegister, valuePasswordRegister]);

    const handleCloseModalRegister = useCallback(() => {
        dispatch(AuthActions.closeModalRegister());
    }, [dispatch]);
    const handleSwitchAuthToRegistration = useCallback(() => {
        dispatch(AuthActions.switchAuthToRegistration());
    }, [dispatch]);

    const options = [
        { value: "fanesi", label: "Fanesi" },
        { value: "horrors", label: "Horrors" },
        { value: "fighters", label: "Fighters" },
    ];

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
                onFinish={() =>
                    console.log({
                        valueUserNameRegister: valueUserNameRegister,
                        valuePasswordRegister: valuePasswordRegister,
                    })
                }
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
                        status={statusInputLoginAndPassword}
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Username"
                        allowClear
                        onChange={(e) =>
                            dispatch(
                                AuthActions.changeUserNameRegister(
                                    e.target.value
                                )
                            )
                        }
                    />
                </Form.Item>
                <>{contextHolder}</>
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
                        status={statusInputLoginAndPassword}
                        type="password"
                        placeholder="Password"
                        allowClear
                        onChange={(e) =>
                            dispatch(
                                AuthActions.changePasswordRegister(
                                    e.target.value
                                )
                            )
                        }
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
                        <h1>{isRegister}</h1>
                    </div>
                </Form.Item>
            </Form>
        </Modal>
    );
});

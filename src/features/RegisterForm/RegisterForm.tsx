import {
    CheckCircleOutlined,
    LockOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Modal, Select } from "antd";
import { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { AuthActions, register } from "../../store/modalAuthAndRegisterReducer";

const RegisterForm = () => {
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
    const dispatch = useDispatch<AppDispatch>();

    const handleOkRegister = useCallback(() => {
        const valueRegister = { valueUserNameRegister, valuePasswordRegister };
        dispatch(register(valueRegister));
        console.log(valueRegister);
    }, [dispatch, valueUserNameRegister, valuePasswordRegister]);

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
                    </div>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default memo(RegisterForm);

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { useCallback, memo } from "react";
import { AuthActions, auth } from "../../../store/modalAuthAndRegisterReducer";
import {
    getIsLoadingTheAuthButton,
    getIsRememberMe,
    getIsVisibleAuth,
    getValuePasswordAuth,
    getValueUserNameAuth,
} from "../model/selectors/AuthSelectors";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

export const AuthForm = memo(() => {
    const isVisibleAuth = useSelector(getIsVisibleAuth);
    const isLoadingTheAuthButton = useSelector(getIsLoadingTheAuthButton);
    const valueUserNameAuth = String(useSelector(getValueUserNameAuth));
    const valuePasswordAuth = String(useSelector(getValuePasswordAuth));
    const isRememberMe = useSelector(getIsRememberMe);

    const dispatch = useAppDispatch();

    const handleOkAuth = useCallback(() => {
        // if (isRememberMe) {
        //     localStorage.setItem("valueUserNameAuth", valueUserNameAuth);
        //     localStorage.setItem("valuePasswordAuth", valuePasswordAuth);
        //     localStorage.setItem("isRememberMe", String(isRememberMe));
        // }
        const valueAuth = {
            valueUserNameAuth,
            valuePasswordAuth,
        };
        dispatch(auth(valueAuth));
        localStorage.setItem("username", valueUserNameAuth);
    }, [dispatch, valueUserNameAuth, valuePasswordAuth]);
    const handleCloseModalAuth = useCallback(() => {
        dispatch(AuthActions.closeModalAuth());
    }, [dispatch]);
    const handleSwitchRegistrationToAuth = useCallback(() => {
        dispatch(AuthActions.switchRegistrationToAuth());
    }, [dispatch]);
    const handleChangeRememberMe = useCallback(() => {
        dispatch(AuthActions.changeRememberMe());
    }, [dispatch]);
    console.log(isRememberMe);
    const user = localStorage.getItem("valueUserNameAuth");

    return (
        <Modal
            open={isVisibleAuth}
            title="Log in"
            onCancel={handleCloseModalAuth}
            footer={[]}
        >
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={() =>
                    console.log({
                        valueUserNameAuth: valueUserNameAuth,
                        valuePasswordAuth: valuePasswordAuth,
                    })
                }
            >
                {/* дописать для remember */}
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
                        value={String(user)}
                        onChange={(e) =>
                            dispatch(
                                AuthActions.changeUserNameAuth(e.target.value)
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
                        value={valuePasswordAuth}
                        onChange={(e) =>
                            dispatch(
                                AuthActions.changePasswordAuth(e.target.value)
                            )
                        }
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox
                            checked={true}
                            onChange={handleChangeRememberMe}
                        >
                            Remember me
                        </Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="/">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            key="submit"
                            loading={isLoadingTheAuthButton}
                            onClick={handleOkAuth}
                        >
                            Log in
                        </Button>
                        <Button
                            type="link"
                            onClick={handleSwitchRegistrationToAuth}
                        >
                            Or register now!
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </Modal>
    );
});

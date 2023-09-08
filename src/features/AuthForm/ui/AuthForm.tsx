import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, message } from "antd";
import Checkbox, { CheckboxChangeEvent } from "antd/es/checkbox";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

import { GeneralAuthAndRegisterActions } from "store/generalAuthAndRegister";
import { AuthActions, auth } from "store/modalAuth";
import {
    getAuthorizationError,
    getIsDisabledButtonToAuth,
    getIsLoadingTheAuthButton,
    getIsRememberMe,
    getIsVisibleAuth,
    getValuePasswordAuth,
    getValueUserNameAuth,
} from "../model/selectors/AuthSelectors";
import { messageWrapper } from "shared/lib/helpers/messages/message";
import { ValidateRegisterError } from "features/RegisterForm/model/types/register";

export const AuthForm = () => {
    const dispatch = useAppDispatch();
    const [messageApi, contextHolder] = message.useMessage();

    const isVisibleAuth = useSelector(getIsVisibleAuth);
    const isLoadingTheAuthButton = useSelector(getIsLoadingTheAuthButton);
    const valueUserNameAuth = String(useSelector(getValueUserNameAuth));
    const valuePasswordAuth = String(useSelector(getValuePasswordAuth));
    const isRememberMe = useSelector(getIsRememberMe);
    const isDisabledButtonToAuth = useSelector(getIsDisabledButtonToAuth);
    const authorizationError = useSelector(getAuthorizationError);

    const handleOkAuth = useCallback(() => {
        try {
            const valueAuth = {
                valueUserNameAuth,
                valuePasswordAuth,
                isRememberMe,
            };
            dispatch(auth(valueAuth));
            localStorage.setItem("username", valueUserNameAuth);
        } catch (e) {
            console.error("handleOkAuth error: ", e);
        }
    }, [dispatch, valueUserNameAuth, valuePasswordAuth, isRememberMe]);
    const handleCloseModalAuth = useCallback(() => {
        dispatch(GeneralAuthAndRegisterActions.closeModalAuth());
    }, [dispatch]);
    const handleSwitchRegistrationToAuth = useCallback(() => {
        dispatch(GeneralAuthAndRegisterActions.switchRegistrationToAuth());
    }, [dispatch]);
    const handleChangeRememberMe = useCallback(
        (e: CheckboxChangeEvent) => {
            dispatch(
                GeneralAuthAndRegisterActions.changeRememberMe(e.target.checked)
            );
            console.log("remember me auth: ", e.target.checked);
        },
        [dispatch]
    );
    const handlePasswordAuth = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(AuthActions.changePasswordAuth(e.target.value));
        },
        [dispatch]
    );
    const handleChangeUserNameAuth = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(AuthActions.changeUserNameAuth(e.target.value));
        },
        [dispatch]
    );

    useEffect(() => {
        if (valueUserNameAuth === "" || valuePasswordAuth === "") {
            dispatch(AuthActions.toggleDisabledButtonToAuth(true));
        } else {
            dispatch(AuthActions.toggleDisabledButtonToAuth(false));
        }
        console.log("isRememberMeAuth: ", isRememberMe);
    }, [isRememberMe, dispatch, valuePasswordAuth, valueUserNameAuth]);

    useEffect(() => {
       if(authorizationError){
        messageWrapper(ValidateRegisterError.SERVER_ERROR, "error", messageApi)
       }
    }, [authorizationError, messageApi]);

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
                        value={valueUserNameAuth}
                        onChange={(e) => handleChangeUserNameAuth(e)}
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
                        type="password"
                        placeholder="Password"
                        allowClear
                        value={valuePasswordAuth}
                        onChange={(e) => handlePasswordAuth(e)}
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox
                            defaultChecked={isRememberMe}
                            checked={isRememberMe}
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
                            disabled={isDisabledButtonToAuth}
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
};

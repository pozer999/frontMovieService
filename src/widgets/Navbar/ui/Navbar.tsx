import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import cls from "./Navbar.module.scss";

import { CloseOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { AuthForm } from "features/AuthForm";
import { RegisterForm } from "features/RegisterForm";
import { UserAccount } from "widgets/UserAccount";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

import {
    GeneralAuthAndRegisterActions,
    logout,
} from "store/generalAuthAndRegister";
import {
    getIsAccess,
    getOpenUserAccount,
    getThemeType,
    getValueUserNameAuth,
    getValueUserNameRegister,
} from "../model/selectors/NavbarSelectors";
import { Button, Drawer, Space } from "antd";

export const Navbar  = memo(() => {
    const dispatch = useAppDispatch();
    const isAccess = useSelector(getIsAccess);
    const valueUserNameRegister = useSelector(getValueUserNameRegister);
    const valueUserNameAuth = useSelector(getValueUserNameAuth);
    const themeType = useSelector(getThemeType);
    const openUserAccount = useSelector(getOpenUserAccount);
    const handleOpenModalRegister = useCallback(() => {
        dispatch(GeneralAuthAndRegisterActions.openModalRegister(true));
    }, [dispatch]);
    const handleOpenModalAuth = useCallback(() => {
        dispatch(GeneralAuthAndRegisterActions.openModalAuth(true));
    }, [dispatch]);
    const handleOpenUserAccount = useCallback(() => {
        dispatch(GeneralAuthAndRegisterActions.openUserAccount());
    }, [dispatch]);
    const handleCloseUserAccount = useCallback(() => {
        dispatch(GeneralAuthAndRegisterActions.closeUserAccount());
    }, [dispatch]);
    const handleLogout = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    return (
        <>
             <div
                className="headerNavbar"
                style={{
                    backgroundColor:
                        themeType === "dark" ? "rgb(15, 15, 15)" : "white",
                }}
            >
                 {isAccess ? (
                    <Space align="center" size="small">
                        <Button
                            onClick={handleOpenUserAccount}
                            type="link"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <div className={cls.username}>
                                {localStorage.getItem("username")}
                            </div>
                            <UserOutlined className={cls.userOutlined} />
                        </Button>
                        <Button
                            onClick={handleLogout}
                            type="link"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginLeft: -30,
                            }}
                        >
                            <LogoutOutlined className={cls.logoutOutlined} />
                        </Button>
                    </Space>
                 ) : (
                    <Space className={cls.spaceNavbarButton}>
                        <Button
                            type="dashed"
                            onClick={handleOpenModalRegister}
                            className={cls.buttonNavbar}
                        >
                            Register
                        </Button>
                        <Button
                            type="primary"
                            onClick={handleOpenModalAuth}
                            className={cls.buttonNavbar}
                        >
                            Log in
                        </Button>
                    </Space>
                )}
            </div>
            <AuthForm />
            <RegisterForm />
            <Drawer
                title={<p style={{ fontSize: 25 }}>Profile</p>}
                placement="top"
                size={"default"}
                closable={false}
                open={openUserAccount}
                onClose={handleCloseUserAccount}
                style={{ overflow: "hidden" }}
                extra={
                    <CloseOutlined
                        onClick={handleCloseUserAccount}
                        style={{ color: "grey" }}
                    />
                }
            >
                <UserAccount />
            </Drawer> 
        </>
    );
});

import { Button, Drawer, Space, Tooltip } from "antd";
import cls from "./Navbar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";

import { AuthForm } from "features/AuthForm";
import { RegisterForm } from "features/RegisterForm";
import { RootState } from "store";
import { NavLink } from "react-router-dom";
import { CloseOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { RoutePath } from "shared/config/routeConfig";
import { UserAccount } from "pages/UserAccount";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import {
    getIsAccess,
    getOpenUserAccount,
    getThemeType,
    getValueUserNameAuth,
    getValueUserNameRegister,
} from "../model/selectors/NavbarSelectors";
import { RegisterActions } from "store/modalRegister";
import { AuthActions } from "store/modalAuth";
import { GeneralAuthAndRegisterActions, generalAuthAndRegisterReducer, logout } from "store/generalAuthAndRegister";

export const Navbar = memo(() => {
    const dispatch = useAppDispatch();
    const isAccess = useSelector(getIsAccess);
    const valueUserNameRegister = useSelector(getValueUserNameRegister);
    const valueUserNameAuth = useSelector(getValueUserNameAuth);
    const themeType = useSelector(getThemeType);
    const openUserAccount = useSelector(getOpenUserAccount);
    const handleOpenModalRegister = useCallback(() => {
        dispatch(RegisterActions.openModalRegister());
    }, [dispatch]);
    const handleOpenModalAuth = useCallback(() => {
        dispatch(AuthActions.openModalAuth());
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

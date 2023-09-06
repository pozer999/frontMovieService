import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import cls from "./Navbar.module.scss";

import { CloseOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { AuthForm } from "features/AuthForm";
import { RegisterForm } from "features/RegisterForm";
import { UserAccount } from "pages/UserAccount";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { ADrawer } from "shared/ui/drawer";
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
import { ASpace } from "shared/ui/space";
import { AButton } from "shared/ui/button";

export const Navbar = memo(() => {
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
                    <ASpace align="center" size="small">
                        <AButton
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
                        </AButton>
                        <AButton
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
                        </AButton>
                    </ASpace>
                ) : (
                    <ASpace className={cls.spaceNavbarButton}>
                        <AButton
                            type="dashed"
                            onClick={handleOpenModalRegister}
                            className={cls.buttonNavbar}
                        >
                            Register
                        </AButton>
                        <AButton
                            type="primary"
                            onClick={handleOpenModalAuth}
                            className={cls.buttonNavbar}
                        >
                            Log in
                        </AButton>
                    </ASpace>
                )}
            </div>
            <AuthForm />
            <RegisterForm />
            <ADrawer
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
            </ADrawer>
        </>
    );
});

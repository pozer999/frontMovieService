import { Button, Drawer, Tooltip } from "antd";
import cls from "./Navbar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { AuthActions } from "../../../store/modalAuthAndRegisterReducer";
import { AuthForm } from "features/AuthForm";
import { RegisterForm } from "features/RegisterForm";
import { RootState } from "store";
import { NavLink } from "react-router-dom";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import { RoutePath } from "shared/config/routeConfig";
import { UserAccount } from "pages/UserAccount";

export const Navbar = memo(() => {
    const dispatch = useDispatch();
    const isRegister = useSelector(
        (state: RootState) => state.modalAuthAndRegisterReducer.isRegister
    );
    const valueUserNameRegister = useSelector(
        (state: RootState) =>
            state.modalAuthAndRegisterReducer.valueUserNameRegister
    );
    const valueUserNameAuth = useSelector(
        (state: RootState) =>
            state.modalAuthAndRegisterReducer.valueUserNameAuth
    );
    const themeType = useSelector(
        (state: RootState) =>
            state.modalFavouritesAndWatchLaterAndSettingsReducer.themeType
    );
    const openUserAccount = useSelector(
        (state: RootState) =>
            state.modalAuthAndRegisterReducer.isVisibleUserAccount
    );
    const handleOpenModalRegister = useCallback(() => {
        dispatch(AuthActions.openModalRegister());
    }, [dispatch]);
    const handleOpenModalAuth = useCallback(() => {
        dispatch(AuthActions.openModalAuth());
    }, [dispatch]);
    const handleOpenUserAccount = useCallback(() => {
        dispatch(AuthActions.openUserAccount());
    }, [dispatch]);
    const handleCloseUserAccount = useCallback(() => {
        dispatch(AuthActions.closeUserAccount());
    }, [dispatch]);

    return (
        <>
            <div
                className={cls.headerNavbar}
                style={{
                    backgroundColor:
                        themeType === "dark" ? "rgb(15, 15, 15)" : "white",
                }}
            >
                {isRegister ? (
                    <>
                        <Button
                            onClick={handleOpenUserAccount}
                            type="link"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <div
                                style={{
                                    color: "gray",
                                    fontSize: 18,
                                    marginRight: 10,
                                }}
                            >
                                {valueUserNameRegister ? valueUserNameRegister : valueUserNameAuth}
                            </div>
                            <UserOutlined
                                style={{
                                    fontSize: 35,
                                    border: "2px solid gray",
                                    borderRadius: 5,
                                    color: "gray",
                                }}
                            />
                        </Button>
                    </>
                ) : (
                    <>
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
                    </>
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

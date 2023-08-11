import { Button } from "antd";
import cls from "./Navbar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { AuthActions } from "../../../store/modalAuthAndRegisterReducer";
import { AuthForm } from "features/AuthForm";
import { RegisterForm } from "features/RegisterForm";
import { RootState } from "store";
import { NavLink } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { RoutePath } from "shared/config/routeConfig";

export const Navbar = memo(() => {
    const dispatch = useDispatch();
    const isRegister = useSelector(
        (state: RootState) => state.modalAuthAndRegisterReducer.isRegister
    );
    const valueUserNameRegister = useSelector(
        (state: RootState) =>
            state.modalAuthAndRegisterReducer.valueUserNameRegister
    );
    const handleOpenModalRegister = useCallback(() => {
        dispatch(AuthActions.openModalRegister());
    }, [dispatch]);
    const handleOpenModalAuth = useCallback(() => {
        dispatch(AuthActions.openModalAuth());
    }, [dispatch]);

    return (
        <>
            <div className={cls.headerNavbar}>
                {isRegister ? (
                    <>
                        <NavLink
                            to={RoutePath.USERACCOUNT}
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
                                {valueUserNameRegister}
                            </div>
                            <UserOutlined
                                style={{
                                    fontSize: 35,
                                    border: "2px solid gray",
                                    borderRadius: 5,
                                    color: "gray",
                                }}
                            />
                        </NavLink>
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
        </>
    );
});

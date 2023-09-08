import "./index.module.scss";
import "./styles/normalize.module.scss";
import cls from "./index.module.scss";
import logo from "../image/movie.png";

import axios from "axios";

import { ConfigProvider, Layout, Row, theme } from "antd";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { RoutePath } from "shared/config/routeConfig";
import { Navbar } from "widgets/Navbar";

import { getThemeType } from "widgets/UserAccount/model/selectors/UserAccountSelectors";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { checkAuth } from "store/generalAuthAndRegister";

import { Routing } from "pages";

axios.defaults.baseURL = "http://localhost:8080/";

const App = () => {
    const dispatch = useAppDispatch();
    const themeType = useSelector(getThemeType);
    const bodyElement = document.body;

    useEffect(() => {
        bodyElement.style.backgroundColor =
            themeType === "dark" ? "rgb(15,15,15)" : "white";
    }, [bodyElement.style, themeType]);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(checkAuth());
            console.log("check");
        }
    }, [dispatch]);

    return (
        <ConfigProvider
            theme={{
                algorithm:
                    themeType === "dark"
                        ? theme.darkAlgorithm
                        : theme.defaultAlgorithm,
                token: { colorPrimary: "rgb(184, 178, 178)" },
                components: { Button: { colorBorder: "red" } },
            }}
        >
            <div className="App">
                <Layout.Header
                    className={cls.headerNavbar}
                    style={{
                        backgroundColor:
                            themeType === "dark" ? "rgb(15,15,15)" : "white",
                    }}
                >
                    <Row
                        justify="space-between"
                        align="middle"
                        className="RowHeaderNavbar"
                        style={{ height: "50px" }}
                    >
                        <NavLink to={RoutePath.MAIN}>
                            <img
                                src={logo}
                                alt=""
                                className={cls.App_navLinkLogoImage__clTId}
                            />
                        </NavLink>
                        <Navbar />
                    </Row>
                </Layout.Header>
                <Layout.Content>
                    <Row justify="center" style={{ marginBottom: 30 }}>
                        <Routing />
                    </Row>
                </Layout.Content>
            </div>
        </ConfigProvider>
    );
};

export default App;

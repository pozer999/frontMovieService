import "./styles/App.module.scss";
import { ConfigProvider, Layout, Row, Switch, theme } from "antd";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";
import { UserOutlined } from "@ant-design/icons";
import { Navbar } from "widgets/Navbar";
import Routing from "Routing/Routing";
import { RoutePath } from "shared/config/routeConfig";

import logo from "./image/movie.png";
import { useSelector } from "react-redux";
import { RootState } from "store";

axios.defaults.baseURL = "http://localhost:8080/";

type ThemeData = {
    borderRadius: number;
    colorPrimary: string;
};

const primary: ThemeData = {
    borderRadius: 6,
    colorPrimary: "rgb(184, 178, 178)",
};
const lime: ThemeData = {
    borderRadius: 12,
    colorPrimary: "rgb(0, 255, 0)",
};

function App() {
    const [data, setData] = useState<ThemeData>(primary);

    const themeType = useSelector(
        (state: RootState) =>
            state.modalFavouritesAndWatchLaterAndSettingsReducer.themeType
    );

    const bodyElement = document.body;
    useEffect(() => {
        bodyElement.style.backgroundColor =
            themeType === "dark" ? "black" : "white";
    }, [bodyElement.style, themeType]);

    //   async function f() {
    //     const result = await axios(
    //         'http://localhost:8080/movies',
    //     );
    //     console.log('movies: ', result);
    //     }
    //     useEffect(() => {
    //     f();
    //   });

    return (
        <ConfigProvider
            theme={{
                algorithm:
                    themeType === "dark"
                        ? theme.darkAlgorithm
                        : theme.defaultAlgorithm,
                token: { colorPrimary: data.colorPrimary },
                components: { Button: { colorBorder: "red" } },
            }}
        >
            <div className="App">
                <Layout.Header
                    className="headerNavbar"
                    style={{
                        backgroundColor:
                            themeType === "dark" ? "black" : "white",
                    }}
                >
                    <Row
                        justify="space-between"
                        align="middle"
                        className="RowHeaderNavbar"
                        style={{ height: "50px" }}
                    >
                        <NavLink to={RoutePath.MAIN} style={{ height: "50px" }}>
                            <img src={logo} alt="" style={{ height: "100%" }} />
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
}

export default App;

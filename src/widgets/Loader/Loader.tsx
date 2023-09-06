import { Spin } from "antd";
import { FC } from "react";

const Loader: FC = () => {
    return (
        <Spin
            tip="Loading"
            size="large"
            style={{
                position: "absolute",
                alignItems: "center",
                height: "100vh",
                display: "flex",
            }}
        ></Spin>
    );
};

export default Loader;

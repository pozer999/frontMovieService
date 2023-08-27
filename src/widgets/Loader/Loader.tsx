import { Spin } from "antd";

const Loader = () => {
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

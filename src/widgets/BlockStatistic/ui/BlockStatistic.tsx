import { LikeOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Row, Statistic } from "antd";
import React, { memo } from "react";
import ColComponent from "shared/ui/col/ColComponent";

export const BlockStatistic = memo(() => {
    return (
        <Row justify="center" style={{ margin: "0 auto" }}>
            <ColComponent span={5} xs={8} xl={5} sm={5}>
                <Statistic
                    title="Feedback"
                    value={1128}
                    prefix={<LikeOutlined />}
                    style={{
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                />
            </ColComponent>
            <ColComponent span={5} xs={8} xl={5} sm={5}>
                <Statistic
                    prefix={<ShareAltOutlined />}
                    title="Share"
                    value={93}
                    style={{
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                />
            </ColComponent>
        </Row>
    );
});

export default BlockStatistic;

import { LikeOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Col, Row, Statistic } from "antd";
import React, { FC, memo } from "react";

export const BlockStatistic = memo(() => {
    return (
        <Row justify="center" style={{ margin: "0 auto" }}>
            <Col span={5} xs={8} xl={5} sm={5}>
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
            </Col>
            <Col span={5} xs={8} xl={5} sm={5}>
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
            </Col>
        </Row>
    );
});

export default BlockStatistic;

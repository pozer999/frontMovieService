import { LikeOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Statistic } from "antd";
import React, { FC, memo } from "react";
import ACol from "shared/ui/col/ui/ACol";
import ARow from "shared/ui/row/ui/ARow";

export const BlockStatistic  = memo(() => {
    return (
        <ARow justify="center" style={{ margin: "0 auto" }}>
            <ACol span={5} xs={8} xl={5} sm={5}>
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
            </ACol>
            <ACol span={5} xs={8} xl={5} sm={5}>
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
            </ACol>
        </ARow>
    );
});

export default BlockStatistic;

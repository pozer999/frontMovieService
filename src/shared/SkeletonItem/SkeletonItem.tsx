import { Card, Col, Skeleton, Space, Spin } from "antd";
import React from "react";

const SkeletonItem = () => {
    return (
        <Col className="gutter-row" span={6}>
            <Card
                loading={false}
                hoverable
                cover={
                    <Skeleton.Image active={true} style={{ fontSize: 40 }} />
                }
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <>
                    <Skeleton.Button
                        active={true}
                        size="default"
                        shape="default"
                        block={false}
                    />
                    <Skeleton.Input active={true} size="default" />
                </>
            </Card>
        </Col>
    );
};

export default SkeletonItem;

import { Card, Col, Row, Skeleton} from "antd";
import React from "react";

const SkeletonItem = () => {
    return (
        <Col className="gutter-row" span={6} style={{position: "relative"}}>
            <Card
                loading={false}
                hoverable
                cover={
                    <Skeleton.Image active={true} style={{ fontSize: 40, width: 250, height: 200, marginTop: 20}} />
                }
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    height: "100%"
                }}
            >
                <Row gutter={[1, 10]}>
                    <Skeleton.Input active={true} size="small" />
                    <Skeleton.Input active={true} size="small" block />
                    <Skeleton.Input active={true} size="small" block />
                </Row>
            </Card>
        </Col>
    );
};

export default SkeletonItem;

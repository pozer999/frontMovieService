import { CloseOutlined } from "@ant-design/icons";
import { Button, Card, Col, Drawer, Row, Skeleton } from "antd";
import { CurrentFilm } from "pages/CurrentFilm";
import { useState } from "react";

const SkeletonItem = () => {
    const [open, setOpen] = useState(false);

    const showLargeDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <Col className="gutter-row" span={6} style={{ position: "relative" }}>
            <Card
                loading={false}
                hoverable
                cover={
                    <Skeleton.Image
                        active={true}
                        style={{
                            fontSize: 40,
                            width: 250,
                            height: 200,
                            marginTop: 20,
                        }}
                    />
                }
                onClick={showLargeDrawer}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                }}
            >
                <Row gutter={[1, 10]}>
                    <Skeleton.Input active={true} size="small" />
                    <Skeleton.Input active={true} size="small" block />
                    <Skeleton.Input active={true} size="small" block />
                </Row>
            </Card>
            <Drawer
                title={" "}
                placement="right"
                size={"large"}
                closable={false}
                open={open}
                style={{ overflow: "hidden" }}
                extra={<CloseOutlined onClick={onClose} style={{color: "grey"}} />}
            >
                <CurrentFilm />
            </Drawer>
        </Col>
    );
};

export default SkeletonItem;

import {
    Avatar,
    Card,
    Divider,
    Layout,
    Skeleton,
    Space,
    Typography,
} from "antd";
import Meta from "antd/es/card/Meta";
import { FC, memo } from "react";



export const BlockComments  = memo(() => {
    return (
        <>
            <Divider orientation="left" style={{ fontSize: 24, marginTop: 30 }}>
                Comments:
                <Typography.Text type="warning" style={{ fontSize: 24 }}>
                    4
                </Typography.Text>
            </Divider>
            <Layout.Footer style={{ background: "transparent" }}>
                <Space
                    direction="vertical"
                    size="small"
                    style={{ display: "flex" }}
                >
                    <Card>
                        <Skeleton loading={false} avatar active>
                            <Meta
                                avatar={
                                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                }
                                title={
                                    <>
                                        <Typography.Title level={2}>
                                            Card title
                                        </Typography.Title>
                                        <Typography.Text italic>
                                            11.10.2023 20:45
                                        </Typography.Text>
                                    </>
                                }
                                description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid"
                            />
                        </Skeleton>
                    </Card>
                    <Card>
                        <Skeleton loading={false} avatar active>
                            <Meta
                                avatar={
                                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                                }
                                title={
                                    <>
                                        <Typography.Title level={2}>
                                            Card title
                                        </Typography.Title>
                                        <Typography.Text italic>
                                            11.10.2023 20:45
                                        </Typography.Text>
                                    </>
                                }
                                description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid"
                            />
                        </Skeleton>
                    </Card>
                    <Card>
                        <Skeleton loading={true} avatar active>
                            <Meta
                                avatar={
                                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                                }
                                title={
                                    <>
                                        <Typography.Title level={2}>
                                            Card title
                                        </Typography.Title>
                                        <Typography.Text italic>
                                            11.10.2023 20:45
                                        </Typography.Text>
                                    </>
                                }
                                description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid"
                            />
                        </Skeleton>
                    </Card>
                </Space>
            </Layout.Footer>
        </>
    );
});

export default BlockComments;

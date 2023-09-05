import ReactPlayer from "react-player";
import cls from "./MoviePage.module.scss";
import {
    Avatar,
    Button,
    Card,
    Col,
    Divider,
    Dropdown,
    Layout,
    Menu,
    Row,
    Skeleton,
    Space,
    Statistic,
    Tooltip,
    Typography,
} from "antd";
import Meta from "antd/es/card/Meta";
import {
    CommentOutlined,
    DownloadOutlined,
    EllipsisOutlined,
    HeartOutlined,
    LikeOutlined,
    MailOutlined,
    MobileOutlined,
    ShareAltOutlined,
    StarOutlined,
    WarningOutlined,
} from "@ant-design/icons";

export const MoviePage = () => {
    return (
        <div className={cls.wrapperVideo}>
            <Divider orientation="center" style={{ fontSize: 35, marginTop: 30 }}>
                The martian
            </Divider>
            <ReactPlayer
                width="90%"
                height="90%"
                style={{ margin: "20px auto" }}
                url="https://www.youtube.com/watch?v=ej3ioOneTy8"
                controls={true}
            />
            <Space.Compact block style={{ width: "90%", margin: "10px auto" }}>
                <Tooltip title="Like">
                    <Button type="text" icon={<LikeOutlined />} size="large" />
                </Tooltip>
                <Tooltip title="Comment">
                    <Button
                        type="text"
                        icon={<CommentOutlined />}
                        size="large"
                    />
                </Tooltip>
                <Tooltip title="Heart">
                    <Button type="text" icon={<HeartOutlined />} size="large" />
                </Tooltip>
                <Tooltip title="Share">
                    <Button
                        type="text"
                        icon={<ShareAltOutlined />}
                        size="large"
                    />
                </Tooltip>
                <Tooltip title="Download">
                    <Button
                        type="text"
                        icon={<DownloadOutlined />}
                        size="large"
                    />
                </Tooltip>
                <Dropdown
                    placement="bottomRight"
                    overlay={
                        <Menu
                            items={[
                                {
                                    key: "1",
                                    label: "Report",
                                    icon: <WarningOutlined />,
                                },
                                {
                                    key: "2",
                                    label: "Mail",
                                    icon: <MailOutlined />,
                                },
                                {
                                    key: "3",
                                    label: "Mobile",
                                    icon: <MobileOutlined />,
                                },
                            ]}
                        />
                    }
                    trigger={["hover"]}
                >
                    <Button
                        type="text"
                        icon={<EllipsisOutlined />}
                        size="large"
                    />
                </Dropdown>
            </Space.Compact>
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
            <Divider orientation="left" style={{ fontSize: 24, marginTop: 30 }}>
                Comments:{" "}
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
        </div>
    );
};

export default MoviePage;

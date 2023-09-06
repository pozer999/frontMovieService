import {
    Avatar,
    Layout,
    Skeleton,
    Typography,
} from "antd";
import { FC, memo } from "react";
import { ACard } from "shared/ui/card";
import { ADivider } from "shared/ui/divider";
import { AMeta } from "shared/ui/meta";
import { ASpace } from "shared/ui/space";


export const BlockComments: FC = memo(() => {
    return (
        <>
            <ADivider orientation="left" style={{ fontSize: 24, marginTop: 30 }}>
                Comments:
                <Typography.Text type="warning" style={{ fontSize: 24 }}>
                    4
                </Typography.Text>
            </ADivider>
            <Layout.Footer style={{ background: "transparent" }}>
                <ASpace
                    direction="vertical"
                    size="small"
                    style={{ display: "flex" }}
                >
                    <ACard>
                        <Skeleton loading={false} avatar active>
                            <AMeta
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
                    </ACard>
                    <ACard>
                        <Skeleton loading={false} avatar active>
                            <AMeta
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
                    </ACard>
                    <ACard>
                        <Skeleton loading={true} avatar active>
                            <AMeta
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
                    </ACard>
                </ASpace>
            </Layout.Footer>
        </>
    );
});

export default BlockComments;

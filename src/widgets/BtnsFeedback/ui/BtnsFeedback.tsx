import {
    CommentOutlined,
    DownloadOutlined,
    EllipsisOutlined,
    HeartOutlined,
    LikeOutlined,
    MailOutlined,
    MobileOutlined,
    ShareAltOutlined,
    WarningOutlined,
} from "@ant-design/icons";
import { Dropdown, MenuProps, Tooltip } from "antd";
import Compact from "antd/es/space/Compact";
import { FC, memo } from "react";
import { AButton } from "shared/ui/button";

export const BtnsFeedback: FC = memo(() => {
    const items: MenuProps["items"] = [
        {
            key: "1",
            label: (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                >
                    1st menu item
                </a>
            ),
            icon: <WarningOutlined />,
        },
        {
            key: "2",
            label: (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                >
                    2nd menu item (disabled)
                </a>
            ),
            icon: <MailOutlined />,
        },
        {
            key: "3",
            label: (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.luohanacademy.com"
                >
                    3rd menu item (disabled)
                </a>
            ),
            icon: <MobileOutlined />,
        },
    ];

    return (
        <Compact block style={{ width: "90%", margin: "10px auto" }}>
            <Tooltip title="Like">
                <AButton type="text" icon={<LikeOutlined />} size="large" />
            </Tooltip>
            <Tooltip title="Comment">
                <AButton type="text" icon={<CommentOutlined />} size="large" />
            </Tooltip>
            <Tooltip title="Heart">
                <AButton type="text" icon={<HeartOutlined />} size="large" />
            </Tooltip>
            <Tooltip title="Share">
                <AButton type="text" icon={<ShareAltOutlined />} size="large" />
            </Tooltip>
            <Tooltip title="Download">
                <AButton type="text" icon={<DownloadOutlined />} size="large" />
            </Tooltip>
            <Dropdown
                placement="bottomRight"
                menu={{ items }}
                trigger={["hover"]}
            >
                <AButton type="text" icon={<EllipsisOutlined />} size="large" />
            </Dropdown>
        </Compact>
    );
});

export default BtnsFeedback;

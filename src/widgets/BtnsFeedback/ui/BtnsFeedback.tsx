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
import { Button, Dropdown, MenuProps, Tooltip } from "antd";
import Compact from "antd/es/space/Compact";
import { FC, memo } from "react";

export const BtnsFeedback  = memo(() => {
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
                <Button type="text" icon={<LikeOutlined />} size="large" />
            </Tooltip>
            <Tooltip title="Comment">
                <Button type="text" icon={<CommentOutlined />} size="large" />
            </Tooltip>
            <Tooltip title="Heart">
                <Button type="text" icon={<HeartOutlined />} size="large" />
            </Tooltip>
            <Tooltip title="Share">
                <Button type="text" icon={<ShareAltOutlined />} size="large" />
            </Tooltip>
            <Tooltip title="Download">
                <Button type="text" icon={<DownloadOutlined />} size="large" />
            </Tooltip>
            <Dropdown
                placement="bottomRight"
                menu={{ items }}
                trigger={["hover"]}
            >
                <Button type="text" icon={<EllipsisOutlined />} size="large" />
            </Dropdown>
        </Compact>
    );
});

export default BtnsFeedback;

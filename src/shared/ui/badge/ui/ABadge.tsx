import Badge, { BadgeProps } from "antd/es/badge";

const ABadge = (props: BadgeProps) => {
    const { children } = props;
    return <Badge {...props}>{children}</Badge>;
};

export default ABadge;

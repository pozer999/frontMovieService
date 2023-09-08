import Divider, { DividerProps } from "antd/es/divider";

const ADivider = (props: DividerProps) => {
    const { children } = props;
    return <Divider {...props}>{children}</Divider>;
};

export default ADivider;

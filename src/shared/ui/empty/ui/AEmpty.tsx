import Empty, { EmptyProps } from "antd/es/empty";

const AEmpty = (props: EmptyProps) => {
    const { children } = props;
    return <Empty {...props}>{children}</Empty>;
};

export default AEmpty;

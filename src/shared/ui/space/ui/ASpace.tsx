import Space, { SpaceProps } from "antd/es/space";

const ASpace = ( props: SpaceProps) => {
    const { children } = props;
    return <Space {...props}>{children}</Space>;
};

export default ASpace;

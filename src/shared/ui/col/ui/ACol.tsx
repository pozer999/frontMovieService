import Col, { ColProps } from "antd/es/col";

const ACol = (props: ColProps) => {
    const { children } = props;
    return <Col {...props}>{children}</Col>;
};

export default ACol;

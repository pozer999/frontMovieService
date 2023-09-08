import Row, { RowProps } from "antd/es/row";

const ARow = (props: RowProps) => {
    const { children } = props;
    return <Row {...props}>{children}</Row>;
};

export default ARow;

import Select, { SelectProps } from "antd/es/select";

const ASelect = (props: SelectProps) => {
    const { children } = props;
    return <Select {...props}>{children}</Select>;
};

export default ASelect;

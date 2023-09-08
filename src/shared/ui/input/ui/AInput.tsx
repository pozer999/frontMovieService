import Input, { InputProps } from "antd/es/input";

const AInput = (props: InputProps) => {
    const { children } = props;
    return <Input {...props}>{children}</Input>;
};

export default AInput;

import Checkbox, { CheckboxProps } from "antd/es/checkbox";


const ACheckbox = (props: CheckboxProps) => {
    const { children } = props;
    return <Checkbox {...props}>{children}</Checkbox>;
};

export default ACheckbox;

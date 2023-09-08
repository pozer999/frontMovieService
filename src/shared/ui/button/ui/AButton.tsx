import Button, { ButtonProps } from "antd/es/button";

const AButton = ( props: ButtonProps ) => {
    const { children } = props;
    return <Button {...props}>{children}</Button>;
};

export default AButton;

import Modal, { ModalProps } from "antd/es/modal";

const AModal = (props: ModalProps) => {
    const { children } = props;
    return <Modal {...props}>{children}</Modal>;
};

export default AModal;

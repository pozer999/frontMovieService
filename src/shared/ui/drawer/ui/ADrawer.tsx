import Drawer, { DrawerProps } from "antd/es/drawer";

const ADrawer = (props: DrawerProps) => {
    const { children } = props;
    return <Drawer {...props}>{children}</Drawer>;
};

export default ADrawer;

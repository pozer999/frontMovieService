import { Button, Layout, Row } from 'antd';
import cls from './Navbar.module.scss';
// import { NavLink } from 'react-router-dom';


export const Navbar = () => (
    <Layout.Header className={cls.headerNavbar}>
        <Row justify="start" align="middle">
             {/* <NavLink to="/main" /> */}
            <Button className={cls.buttonNavbar}>Register</Button>
            <Button className={cls.buttonNavbar}>Login</Button>
        </Row>
    </Layout.Header>
);

import { Button, Layout, Row } from 'antd';
import cls from './Navbar.module.scss';
// import { NavLink } from 'react-router-dom';


export const Navbar = () => (
    <div className={cls.headerNavbar}>
        <img src='../image/movie.png' alt="" style={{height: "40px"}}/>
        <Button className={cls.buttonNavbar} type='primary'>Register</Button>
        <Button className={cls.buttonNavbar} type='primary'>Login</Button>
    </div>
);

import { Button} from 'antd';
import cls from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import { RoutePath } from '../../../Routing/Pages';


export const Navbar = () => (
    <div className={cls.headerNavbar}>
        <NavLink to={RoutePath.LOGIN}>
            <Button className={cls.buttonNavbar} type='dashed'>Register</Button>
        </NavLink>
        <Button className={cls.buttonNavbar} type='primary'>Login</Button>
    </div>
);

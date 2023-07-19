import { LoginPage } from '../../pages/LoginPage';
import { MainPage } from '../../pages/MainPage';

export const RoutePath = {
  MAIN: '/',
  LOGIN: '/login',
};

export const routeConfig = [
  {
    name: 'LoginPage',
    path: RoutePath.LOGIN,
    elem: <LoginPage />,
  },
  {
    name: 'MainPage',
    path: RoutePath.MAIN,
    elem: <MainPage />,
  },
];

import { LoginPageLazy } from "../pages/LoginPage/ui/LoginPageLazy";
import MainPage from "../pages/MainPage/UI/MainPage";


export const RoutePath = {
  MAIN: "/",
  LOGIN: "/login"
}

export const Pages = [
  {
    name: "LoginPage",
    path: RoutePath.LOGIN,
    elem: <LoginPageLazy/>
  }, 
  {
    name: "MainPage",
    path: RoutePath.MAIN,
    elem: <MainPage/>
  }
];

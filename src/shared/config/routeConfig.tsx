import { LoginPage } from "../../pages/LoginPage";
import { MainPageLazy } from "../../pages/MainPage/MainPageLazy";

export const RoutePath = {
	MAIN: "/",
	LOGIN: "/login",
};

export const routeConfig = [
	{
		name: "LoginPage",
		path: RoutePath.LOGIN,
		elem: <LoginPage />,
	},
	{
		name: "MainPageLazy",
		path: RoutePath.MAIN,
		elem: <MainPageLazy />,
	},
];

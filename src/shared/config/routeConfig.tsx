import { MainPageLazy } from "../../pages/MainPage/MainPageLazy";

export const RoutePath = {
	MAIN: "/",
	LOGIN: "/login",
};

export const routeConfig = [

	{
		name: "MainPageLazy",
		path: RoutePath.MAIN,
		elem: <MainPageLazy />,
	},
];

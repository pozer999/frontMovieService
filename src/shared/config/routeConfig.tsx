import CurrentFilm from "../../pages/CurrentFilm/ui/CurrentFilm";
import { MainPageLazy } from "../../pages/MainPage/MainPageLazy";
import UserAccount from "../../pages/UserAccount/UserAccount";

export const RoutePath = {
	MAIN: "/",
	CURRENTFILM: "/film",
	USERACCOUNT: '/user'
};

export const routeConfig = [

	{
		name: "MainPageLazy",
		path: RoutePath.MAIN,
		elem: <MainPageLazy />,
	},

	{
		name: "CurrentFilm",
		path: RoutePath.CURRENTFILM,
		elem: <CurrentFilm />,
	},

	{
		name: "UserAccount",
		path: RoutePath.USERACCOUNT,
		elem: <UserAccount />,
	},
];

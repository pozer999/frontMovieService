import CurrentFilm from "../../pages/CurrentFilm/ui/CurrentFilm";
import { MainPageLazy } from "../../pages/MainPage/MainPageLazy";

export const RoutePath = {
	MAIN: "/",
	CURRENTFILM: "/film",
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
];

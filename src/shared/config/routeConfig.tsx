import { UserAccount } from "pages/UserAccount";
import { CurrentFilm } from "pages/CurrentFilm";
import { MainPageLazy } from "pages/MainPage/MainPageLazy";
import MoviePage from "pages/MoviePage/ui/MoviePage";

export const RoutePath = {
	MAIN: "/",
	MOVIEPAGE: "/movie",
	// USERACCOUNT: '/user'
};

export const routeConfig = [

	{
		name: "MainPageLazy",
		path: RoutePath.MAIN,
		elem: <MainPageLazy />,
	},

	{
		name: "MoviePage",
		path: RoutePath.MOVIEPAGE,
		elem: <MoviePage />,
	},

	// {
	// 	name: "UserAccount",
	// 	path: RoutePath.USERACCOUNT,
	// 	elem: <UserAccount />,
	// },
];

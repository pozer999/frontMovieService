import { MainPageLazy } from "pages/MainPage/MainPageLazy";
import { MoviePageLazy } from "pages/MoviePage/MoviePageLazy";

export const RoutePath = {
    MAIN: "/",
    MOVIEPAGE: "/movie",
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
        elem: <MoviePageLazy />,
    },
];

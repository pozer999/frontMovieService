import { Spin } from "antd";
import { PostFilm } from "entities/postFilm";
import { FC, memo } from "react";
import { useSelector } from "react-redux";
import SkeletonItem from "entities/SkeletonItem/ui/SkeletonItem";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

import {
    getError,
    getFilms,
    getFilter,
    getIsLoading,
} from "../model/selectors/ListFilmsSelectors";
import { ARow } from "shared/ui/row";
import { ACol } from "shared/ui/col";
import { ListFilms_SkeletonItems } from "../ListFilms_SkeletonItems";
import ListFilms_PostsFilm from "../ListFilms_PostsFilm/ui/ListFilms_PostsFilm";

export const ListFilms: FC = memo(() => {
    const dispatch = useAppDispatch();
    const filter = useSelector(getFilter);
    const films = useSelector(getFilms);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    // console.log("list: ", films);
    // useEffect(() => {
    //     dispatch(fetchFilms());
    // }, [filter, dispatch]);
    return (
        <div>
            {isLoading ? (
                error === undefined ? (
                    <ListFilms_SkeletonItems />
                ) : (
                    <div
                        style={{
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "center",
                            marginTop: 30,
                            color: "rgb(202, 92, 92)",
                            fontSize: 20,
                        }}
                    >
                        Ошибка загрузки фильмов...
                    </div>
                )
            ) : films.length !== 0 ? (
                <ListFilms_PostsFilm films={films} />
            ) : (
                <ListFilms_SkeletonItems />
            )}
        </div>
    );
});

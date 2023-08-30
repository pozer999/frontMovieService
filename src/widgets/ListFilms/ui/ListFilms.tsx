import { Col, Grid, Row, Skeleton, Space, Spin } from "antd";
import React, { memo } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms } from "../../../store/FilmsSlice";
import { AppDispatch, RootState } from "../../../store";
import { PostFilm } from "entities/postFilm";
import SkeletonItem from "shared/SkeletonItem/ui/SkeletonItem";
import {
    getError,
    getFilms,
    getFilter,
    getIsLoading,
} from "../model/selectors/ListFilmsSelectors";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

export const ListFilms = memo(() => {
    const dispatch = useAppDispatch();
    const filter = useSelector(getFilter);
    const films = useSelector(getFilms);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    console.log("list: ", films);
    // useEffect(() => {
    //     dispatch(fetchFilms());
    // }, [filter, dispatch]);
    return (
        <div>
            {isLoading ? (
                error === undefined ? (
                    <>
                        <Spin
                            tip="Loading"
                            size="large"
                            style={{
                                alignItems: "center",
                                display: "flex",
                                justifyContent: "center",
                                marginTop: 30,
                            }}
                        ></Spin>
                        <Skeleton.Image active={true} />
                    </>
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
                <Row
                    gutter={[16, 24]}
                    style={{ margin: 10, marginTop: 50, marginBottom: 50 }}
                >
                    {films.map((film: any, i: number) => (
                        <Col className="gutter-row" span={6} key={i}>
                            <PostFilm film={film} />
                        </Col>
                    ))}
                </Row>
            ) : (
                <Row
                    gutter={[16, 24]}
                    style={{ margin: 10, marginTop: 50, marginBottom: 50 }}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
                        <SkeletonItem key={index} />
                    ))}
                </Row>
            )}
        </div>
    );
});

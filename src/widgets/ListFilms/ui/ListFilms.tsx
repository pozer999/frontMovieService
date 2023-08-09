import { Col, Row, Skeleton, Space, Spin } from "antd";
import React, { memo } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms } from "../../../store/FilmsSlice";
import { AppDispatch, RootState } from "../../../store";
import { PostFilm } from "entities/postFilm";

export const ListFilms = memo(() => {
    const dispatch = useDispatch<AppDispatch>();
    const filter = useSelector((state: any) => state.films.filter);
    const films = useSelector((state: any) => state.films.films);
    const isLoading = useSelector((state: RootState) => state.films.isLoading);
    const error = useSelector((state: RootState) => state.films.error);
    console.log("list: ", films);
    useEffect(() => {
        dispatch(fetchFilms(filter));
    }, [filter, dispatch]);
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
                <Row gutter={[16, 24]} style={{ margin: 10, marginTop: 45 }}>
                    {films.map((film: any, i: number) => (
                        <Col className="gutter-row" span={6} key={i}>
                            <PostFilm film={film} />
                        </Col>
                    ))}
                </Row>
            ) : (
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
                    <Space>
                        <Skeleton.Button
                            active={true}
                            size="default"
                            shape="default"
                            block={false}
                        />
                        <Skeleton.Avatar
                            active={true}
                            size="default"
                            shape="circle"
                        />
                        <Skeleton.Input active={true} size="default" />
                    </Space>
                    <br />
                    <br />
                    <Skeleton.Button
                        active={true}
                        size="default"
                        shape="default"
                        block={false}
                    />
                    <br />
                    <br />
                    <Skeleton.Input
                        active={true}
                        size="default"
                        block={false}
                    />
                    <br />
                    <br />
                    <Space></Space>
                    <Skeleton.Image active={true} />
                </>
            )}
        </div>
    );
});

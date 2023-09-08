import { CloseOutlined } from "@ant-design/icons";
import { Card, Col, Divider, Drawer, Empty, Row, Skeleton } from "antd";

import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import { CurrentFilm } from "widgets/CurrentFilm";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { GeneralAuthAndRegisterActions } from "store/generalAuthAndRegister";
import { getVisibleCurrentFilm } from "../model/selectors/SkeletonItemSelectors";
import cls from "./SkeletonItem.module.scss";

const SkeletonItem = () => {
    const dispatch = useAppDispatch();
    const visibleCurrentFilm = useSelector(getVisibleCurrentFilm);
    const handleOpenCurrentFilm = useCallback(() => {
        dispatch(GeneralAuthAndRegisterActions.openCurrentFilm());
    }, [dispatch]);
    const handleCloseCurrentFilm = useCallback(() => {
        dispatch(GeneralAuthAndRegisterActions.closeCurrentFilm());
    }, [dispatch]);

    useEffect(() => {
        const { innerWidth: width, innerHeight: height } = window;
        console.log(height, width);
    }, []);

    return (
        <Col
            className="gutter-row"
            xs={24}
            sm={12}
            md={8}
            lg={8}
            xl={6}
            style={{ position: "relative" }}
        >
            <Card
                loading={false}
                hoverable
                onClick={handleOpenCurrentFilm}
                className={cls.cardSkeletonItem}
            >
                <Row gutter={[1, 4]} className={cls.rowEmpty}>
                    <Empty
                        // .image={AEmpty.PRESENTED_IMAGE_SIMPLE}
                        // imageStyle={{ height: 100 }}
                        description={
                            <span className={cls.spanEmptyImage}>
                                Error loading movies
                            </span>
                        }
                    />
                    <>
                        <Skeleton.Input
                            active={true}
                            className={cls.skeletonInput}
                            size="small"
                            style={{ height: 20 }}
                        />
                        <Skeleton.Input
                            active={true}
                            className={cls.skeletonInput}
                            size="small"
                            style={{ height: 20 }}
                            block
                        />
                        <Skeleton.Input
                            active={true}
                            className={cls.skeletonInput}
                            size="small"
                            style={{ height: 20 }}
                            block
                        />
                    </>
                </Row>
            </Card>
            <Drawer
                mask={false}
                title={
                    <Divider
                        orientation="center"
                        style={{ fontSize: 26, fontWeight: "bold" }}
                    >
                        The martian
                    </Divider>
                }
                placement="right"
                size={"large"}
                closable={false}
                open={visibleCurrentFilm}
                onClose={handleCloseCurrentFilm}
                style={{ overflow: "hidden" }}
                extra={
                    <CloseOutlined
                        onClick={handleCloseCurrentFilm}
                        style={{ color: "grey" }}
                    />
                }
            >
                <CurrentFilm />
            </Drawer>
        </Col>
    );
};

export default SkeletonItem;

import {
    CloseOutlined,
    DislikeFilled,
    ExceptionOutlined,
    SmileOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Divider, Drawer, Empty, Row, Skeleton } from "antd";
import { CurrentFilm } from "pages/CurrentFilm";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import { AuthActions } from "store/modalAuthAndRegisterReducer";
import { getVisibleCurrentFilm } from "../model/selectors/SkeletonItemSelectors";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

import cls from "./SkeletonItem.module.scss";

const SkeletonItem = () => {
    const dispatch = useAppDispatch();
    const visibleCurrentFilm = useSelector(getVisibleCurrentFilm);
    const handleOpenCurrentFilm = useCallback(() => {
        dispatch(AuthActions.openCurrentFilm());
    }, [dispatch]);
    const handleCloseCurrentFilm = useCallback(() => {
        dispatch(AuthActions.closeCurrentFilm());
    }, [dispatch]);
    // const [open, setOpen] = useState(false);

    // const showDrawer = () => {
    //   setOpen(true);
    // };

    // const onClose = () => {
    //   setOpen(false);
    // };

    // const customizeRenderEmpty = () => (
    //     <div style={{ textAlign: 'center' }}>
    //       <SmileOutlined style={{ fontSize: 20 }} />
    //       <p>Data Not Found</p>
    //     </div>
    //   );
    useEffect(() => {
        const { innerWidth: width, innerHeight: height } = window;
        console.log(height, width);
    }, []);

    return (
        <Col
            className="gutter-row"
            xs={24} sm={12} md={8} lg={8} xl={6}
            style={{ position: "relative" }}
        >
            <Card
                loading={false}
                hoverable
                // cover={
                //     <div className={cls.skeletonImage}>
                //         <Skeleton.Image
                //             active={true}
                //             // className={cls.skeletonImage}
                //             // style={{
                //             //     fontSize: 40,
                //             //     width: 250,
                //             //     height: 200,
                //             //     marginTop: 20,
                //             // }}
                //         />
                //     </div>
                // }
                onClick={handleOpenCurrentFilm}
                // style={{
                //     display: "flex",
                //     justifyContent: "center",
                //     flexDirection: "column",
                //     alignItems: "center",
                //     width: "100%",
                //     height: "100%",
                // }}
                className={cls.cardSkeletonItem}
            >
                <Row gutter={[1, { xs: 8, sm: 10 }]} className={cls.rowEmpty}>
                    {/* <div className={cls.divSkeletonImage}>
                        <Skeleton.Image
                            active={true}
                             className={cls.skeletonImage}
                            // style={{
                            //     fontSize: 40,
                            //     width: 250,
                            //     height: 200,
                            //     marginTop: 20,
                            // }}
                        />
                    </div> */}
                    
                    <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        // imageStyle={{ height: 100 }}
                        description={
                            <span style={{ fontSize: window.innerWidth < 410 ? 14 : 18 }}>
                                Error loading movies
                            </span>
                        }
                    />
                    <>
                    <Skeleton.Input active={true} className={cls.skeletonInput} size="small" style={{height: window.innerWidth < 550 ? window.innerWidth < 410 ? 16 : 20 : 24}}/>
                    <Skeleton.Input active={true} className={cls.skeletonInput} size="small" style={{height: window.innerWidth < 550 ? window.innerWidth < 410 ? 16 : 20 : 24}} block />
                    <Skeleton.Input active={true} className={cls.skeletonInput} size="small" style={{height: window.innerWidth < 550 ? window.innerWidth < 410 ? 16 : 20 : 24}} block /></>
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

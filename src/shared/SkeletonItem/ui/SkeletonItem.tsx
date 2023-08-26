import { CloseOutlined } from "@ant-design/icons";
import { Button, Card, Col, Divider, Drawer, Row, Skeleton } from "antd";
import { CurrentFilm } from "pages/CurrentFilm";
import { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import { AuthActions } from "store/modalAuthAndRegisterReducer";
import { getVisibleCurrentFilm } from "../model/selectors/SkeletonItemSelectors";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

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
    return (
        <Col className="gutter-row" span={6} style={{ position: "relative" }}>
            <Card
                loading={false}
                hoverable
                cover={
                    <Skeleton.Image
                        active={true}
                        style={{
                            fontSize: 40,
                            width: 250,
                            height: 200,
                            marginTop: 20,
                        }}
                    />
                }
                onClick={handleOpenCurrentFilm}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                }}
            >
                <Row gutter={[1, 10]}>
                    <Skeleton.Input active={true} size="small" />
                    <Skeleton.Input active={true} size="small" block />
                    <Skeleton.Input active={true} size="small" block />
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

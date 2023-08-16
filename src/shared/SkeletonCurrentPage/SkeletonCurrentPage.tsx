import {
    Breadcrumb,
    Col,
    Collapse,
    Divider,
    Row,
    Skeleton,
    Space,
    Steps,
} from "antd";
import { memo } from "react";
import { Typography } from "antd";
const { Text } = Typography;
import mars from "../../../src/image/mars.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import Lorem from "shared/Lorem";
import { Rate } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "store";

export const SkeletonCurrentFilm = memo(() => {
    return (
        <>
            <Space direction="vertical" size="small">
                <Row gutter={[24, 8]}>
                    <Col span={10} style={{ color: "white" }}>
                        <Skeleton.Image style={{ height: 300, width: 250 }} active/>
                    </Col>
                    <Col span={14} style={{ color: "white", fontSize: 25 }}>
                        <Space direction="vertical" size={"small"}>
                            <Space>
                                <Skeleton.Button active size="small"/>
                            </Space>
                            <Space>
                                <Skeleton.Button active/>
                            </Space>
                            <Space >
                                <Skeleton.Input active/>
                            </Space>
                            <Space>
                                <Skeleton.Button active/>
                            </Space>
                            <Space>
                                <Skeleton.Avatar active shape="square"/>
                            </Space>
                            <Space wrap>
                                <Skeleton.Input active size="small"/>
                            </Space>
                            <Space wrap>
                                <Skeleton.Input active/>
                            </Space>
                        </Space>
                    </Col>
                </Row>
                <>
                    <Divider orientation="left" style={{ fontSize: 20 }}>
                        Similar
                    </Divider>
                    <Swiper
                        navigation={true}
                        scrollbar={{
                            hide: true,
                        }}
                        modules={[Navigation, Scrollbar]}
                        slidesPerView={4}
                        style={{
                            borderRadius: 5,
                            height: 200,
                            width: "700px",
                        }}
                    >
                        {[
                            mars,
                            mars,
                            mars,
                            mars,
                            mars,
                            mars,
                            mars,
                            mars,
                            mars,
                        ].map((item, index) => (
                            <SwiperSlide key={index}>
                                <Skeleton.Image style={{ height: 150, width: 120}} active/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            </Space>
        </>
    );
});

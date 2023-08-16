import { Breadcrumb, Col, Collapse, Divider, Row, Space, Steps } from "antd";
import { memo } from "react";
import { Typography } from "antd";
import "./CurrentFilm.module.scss";
const { Text } = Typography;
import mars from "../../../image/mars.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import Lorem from "shared/Lorem";
import { Rate } from "antd";

export const CurrentFilm = memo(() => {
    return (
        <div style={{ width: 700, marginTop: -20 }}>
            <Divider orientation="center" style={{ fontSize: 26, fontWeight: "bold"}}>
                The martian
            </Divider>
            <Space direction="vertical" size="small">
                <Row gutter={[24, 8]}>
                    <Col span={6} style={{ color: "white" }}>
                        <img src={mars} alt="" style={{ maxWidth: "100%" }} />
                    </Col>
                    <Col span={18} style={{ color: "white", fontSize: 25 }}>
                        <Space direction="vertical" size={"small"}>
                            <Space>
                                <Text strong>Year of publication:</Text>
                                <Text>2003</Text>
                            </Space>
                            <Space>
                                <Text strong>Duration:</Text>
                                <Text>2:30</Text>
                            </Space>
                            <Space>
                                <Text strong>Genre:</Text>
                                <Text>comedy</Text>
                            </Space>
                            <Space>
                                <Text strong>Rating:</Text>
                                <Rate disabled defaultValue={4} />
                            </Space>
                            <Space>
                                <Text strong>Director:</Text>
                                <Text>Fabrice Du Welz</Text>
                            </Space>
                            <Space wrap>
                                <Text strong>The actors:</Text>
                                <Text>
                                    <p style={{ maxWidth: "50%" }}>
                                        Laurent Luca, Brigitte Laet, Gigi
                                        Coursigny, Jean-Luc Couchard, Jacqui
                                        Berroyer, Philippe Naon, Philippe
                                        Grandanri, Joe Prestia, Marc Lefebvre,
                                        Alfred David
                                    </p>
                                </Text>
                            </Space>
                            <Space wrap>
                                <Collapse
                                style={{margin: -16, marginTop: -25}}
                                    ghost
                                    items={[
                                        {
                                            key: "1",
                                            label: (
                                                <Text strong>Description:</Text>
                                            ),
                                            children: (
                                                <Text>
                                                    <Lorem />
                                                </Text>
                                            ),
                                        },
                                    ]}
                                />
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
                                <img
                                    src={item}
                                    alt=""
                                    style={{ height: 200 }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Divider orientation="left" />
                </>
            </Space>
        </div>
    );
});

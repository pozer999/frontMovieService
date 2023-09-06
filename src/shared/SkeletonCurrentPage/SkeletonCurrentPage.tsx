import { Skeleton } from "antd";
import { memo } from "react";
import ACol from "shared/ui/col/ui/ACol";
import { ADivider } from "shared/ui/divider";
import ARow from "shared/ui/row/ui/ARow";
import { ASpace } from "shared/ui/space";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import mars from "../../../src/image/mars.jpg";

export const SkeletonCurrentFilm = memo(() => {
    return (
        <>
            <ASpace direction="vertical" size="small">
                <ARow gutter={[24, 8]}>
                    <ACol span={10} style={{ color: "white" }}>
                        <Skeleton.Image
                            style={{ height: 300, width: 250 }}
                            active
                        />
                    </ACol>
                    <ACol span={14} style={{ color: "white", fontSize: 25 }}>
                        <ASpace direction="vertical" size={"small"}>
                            <ASpace>
                                <Skeleton.Button active size="small" />
                            </ASpace>
                            <ASpace>
                                <Skeleton.Button active />
                            </ASpace>
                            <ASpace>
                                <Skeleton.Input active />
                            </ASpace>
                            <ASpace>
                                <Skeleton.Button active />
                            </ASpace>
                            <ASpace>
                                <Skeleton.Avatar active shape="square" />
                            </ASpace>
                            <ASpace wrap>
                                <Skeleton.Input active size="small" />
                            </ASpace>
                            <ASpace wrap>
                                <Skeleton.Input active />
                            </ASpace>
                        </ASpace>
                    </ACol>
                </ARow>
                <>
                    <ADivider orientation="left" style={{ fontSize: 20 }}>
                        Similar
                    </ADivider>
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
                                <Skeleton.Image
                                    style={{ height: 150, width: 120 }}
                                    active
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            </ASpace>
        </>
    );
});

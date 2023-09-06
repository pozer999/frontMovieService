import { Grid, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { EyeTwoTone } from "@ant-design/icons";
import { memo } from "react";
import { AModal } from "shared/ui/modal";

interface IModalWatchLaterFilm {
    items: string[];
    title: string;
    isVisible: boolean;
    handleCloseModal: any;
}

export const ModalWatchLaterFilm = memo(
    ({ items, title, isVisible, handleCloseModal }: IModalWatchLaterFilm) => {
        return (
            <AModal
                title={title}
                style={{ fontSize: 80 }}
                footer={[]}
                centered
                open={isVisible}
                onCancel={handleCloseModal}
                width={1000}
            >
                <>
                    <Swiper
                        style={{ padding: 20 }}
                        slidesPerView={5}
                        grid={{
                            rows: 1,
                        }}
                        spaceBetween={30}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        modules={[Grid, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {items.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                style={{
                                    background: "gray",
                                    fontSize: "18px",
                                    height: "250px",
                                    width: "200px",
                                    color: "white",
                                    borderRadius: 5,
                                }}
                            >
                                <>
                                    <img
                                        style={{
                                            height: "100%",
                                            width: "100%",
                                            borderRadius: 5,
                                            userSelect: "none",
                                        }}
                                        src={item}
                                        alt="film"
                                    />
                                    <EyeTwoTone
                                        style={{
                                            position: "absolute",
                                            top: 5,
                                            right: 5,
                                            fontSize: 25,
                                            cursor: "pointer",
                                        }}
                                    />
                                </>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            </AModal>
        );
    }
);

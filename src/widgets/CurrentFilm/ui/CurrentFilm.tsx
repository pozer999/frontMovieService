import { Breadcrumb, Collapse, Steps, Switch } from "antd";
import { FC, memo, useState } from "react";
import { Typography } from "antd";
const { Text } = Typography;
import mars from "../../../image/mars.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import Lorem from "shared/Lorem";
import { Rate } from "antd";
import { useSelector } from "react-redux";
import { SkeletonCurrentFilm } from "shared/SkeletonCurrentPage/SkeletonCurrentPage";
import { getTypeTheme } from "../model/selectors/CurrentFilmSelectors";
import cls from "./CurrentFilm.module.scss";
import { PlayCircleOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { ADivider } from "shared/ui/divider";
import { ASpace } from "shared/ui/space";
import { AButton } from "shared/ui/button";
import { ACol } from "shared/ui/col";
import { ARow } from "shared/ui/row";

export const CurrentFilm  = memo(() => {
    const typeTheme = useSelector(getTypeTheme);
    const countRate = 4;
    const [isLoadingCurrentPage, setIsLoadingCurrentPage] =
        useState<boolean>(false);
    function onChange() {
        setIsLoadingCurrentPage(!isLoadingCurrentPage);
    }
    return (
        <div className={cls.wrapperCurrentFilm}>
            <p style={{ color: "orange", fontSize: 12, padding: 8 }}>
                loading? <Switch onChange={onChange} size="small" />
            </p>

            {isLoadingCurrentPage ? (
                <SkeletonCurrentFilm />
            ) : (
                <ASpace
                    direction="vertical"
                    size="small"
                    className={cls.spaceText}
                >
                    <ARow gutter={[24, 8]}>
                        <ACol
                            xl={10}
                            md={8}
                            xs={8}
                            span={8}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src={mars}
                                alt="avatar"
                                className={cls.imgCurrentFilm}
                            />
                            <NavLink to="/movie">
                                <AButton
                                    type="primary"
                                    size="large"
                                    icon={<PlayCircleOutlined />}
                                    className={cls.btnWathchRightNow}
                                >
                                    Watch right now
                                </AButton>
                            </NavLink>
                        </ACol>
                        <ACol span={14} className={cls.wrapperForText}>
                            <ASpace direction="vertical" size={"small"}>
                                <ASpace>
                                    <Text strong>Year of publication:</Text>
                                    <Text>2003</Text>
                                </ASpace>
                                <ASpace>
                                    <Text strong>Duration:</Text>
                                    <Text>2:30</Text>
                                </ASpace>
                                <ASpace>
                                    <Text strong>Genre:</Text>
                                    <Text>comedy</Text>
                                </ASpace>
                                <ASpace>
                                    <Text strong>Rating:</Text>
                                    {typeTheme === "dark" ? (
                                        <Text
                                            strong
                                            type={
                                                Number(countRate) == 3
                                                    ? "warning"
                                                    : Number(countRate) > 3
                                                    ? "success"
                                                    : "danger"
                                            }
                                        >
                                            {countRate}
                                        </Text>
                                    ) : (
                                        <Rate disabled defaultValue={4} />
                                    )}
                                </ASpace>
                                <ASpace>
                                    <Text strong>Director:</Text>
                                    <Text>Fabrice Du Welz</Text>
                                </ASpace>
                                <ASpace wrap>
                                    <Text strong>The actors:</Text>
                                    <Text>
                                        <p className={cls.actorsText}>
                                            Laurent Luca, Brigitte Laet, Gigi
                                            Coursigny, Jean-Luc Couchard, Jacqui
                                            Berroyer, Philippe Naon, Philippe
                                            Grandanri, Joe Prestia, Marc
                                            Lefebvre, Alfred David
                                        </p>
                                    </Text>
                                </ASpace>
                                <ASpace wrap>
                                    <Collapse
                                        className={cls.collapse}
                                        ghost
                                        items={[
                                            {
                                                key: "1",
                                                label: (
                                                    <Text strong>
                                                        Description:
                                                    </Text>
                                                ),
                                                children: (
                                                    <Text>
                                                        <Lorem />
                                                    </Text>
                                                ),
                                            },
                                        ]}
                                    />
                                </ASpace>
                            </ASpace>
                        </ACol>
                    </ARow>
                    <>
                        <ADivider
                            orientation="left"
                            className={cls.driverSimilar}
                        >
                            Similar
                        </ADivider>
                        <div className={cls.wrapperSwiper}>
                            <Swiper
                                navigation={true}
                                scrollbar={{
                                    hide: true,
                                }}
                                modules={[Navigation, Scrollbar]}
                                slidesPerView={4}
                                className={cls.swiperSimilar}
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
                                            alt="FILM"
                                            className={cls.swiperSimilar_item}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </>
                </ASpace>
            )}
        </div>
    );
});

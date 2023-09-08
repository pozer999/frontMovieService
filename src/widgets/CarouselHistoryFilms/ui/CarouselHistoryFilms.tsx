import { FC, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "./CarouselHisroryFilms.module.scss";
import { ItemHistoryFilmsCarousel } from "entities/ItemHistoryFilmsCarousel";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { getThemeType } from "../model/selectors/CarouselHistorySelectors";

import cls from "./CarouselHisroryFilms.module.scss";
import { Divider } from "antd";

interface ICarouselHistoryFilms {
    title: any;
    carouselItems: string[];
}

export const CarouselHistoryFilms = memo(
    ({ title, carouselItems }: ICarouselHistoryFilms) => {
        // const [instance, setInstance] = useState<SwiperClass | null>(null);
        // const swiperElRef = useRef<SwiperRef>(null);

        // useEffect(() => {
        // 	instance?.slideTo(2);
        // 	// ref usage
        // 	console.log(swiperElRef.current?.swiper.activeIndex);
        // }, []);
        const themeType = useSelector(getThemeType);
        return (
            <>
                <Divider
                    orientation="left"
                    style={{
                        color: themeType === "dark" ? "white" : "rgb(15,15,15)",
                        fontSize: 16,
                    }}
                >
                    {title}
                </Divider>
                <div className={cls.wrapperSwiper}>
                    <Swiper
                        navigation={true}
                        scrollbar={{
                            hide: true,
                        }}
                        modules={[Navigation, Scrollbar]}
                        slidesPerView={2.8}
                        className={cls.swiperHistoryFilm}
                    >
                        {carouselItems.map((item, index) => (
                            <SwiperSlide key={index}>
                                <ItemHistoryFilmsCarousel item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </>
        );
    }
);

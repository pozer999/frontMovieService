import { Divider } from "antd";
import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "./CarouselHisroryFilms.module.scss";
import { ItemHistoryFilmsCarousel } from "entities/ItemHistoryFilmsCarousel";
import { useSelector } from "react-redux";
import { RootState } from "store";
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
        const themeType = useSelector(
            (state: RootState) =>
                state.modalFavouritesAndWatchLaterAndSettingsReducer.themeType
        );
        return (
            <>
                <Divider
                    orientation="left"
                    style={{
                        color: themeType === "dark" ? "white" : "black",
                        fontSize: 25,
                    }}
                >
                    {title}
                </Divider>
                <Swiper
                    navigation={true}
                    scrollbar={{
                        hide: true,
                    }}
                    modules={[Navigation, Scrollbar]}
                    slidesPerView={3}
                    style={{ borderRadius: 5, height: 200 }}
                >
                    {carouselItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <ItemHistoryFilmsCarousel item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Divider orientation="left" />
            </>
        );
    }
);

import { Layout } from "antd";
import { FC, memo, useCallback } from "react";
import { SwiperClass, SwiperRef } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FloatButtons } from "shared/ui/FloatButtons";
import { CarouselHistoryFilms } from "widgets/CarouselHistoryFilms";
import { ModalFavouritiesFilm } from "widgets/Modals/ModalFavouritiesFilm";
import { ModalWatchLaterFilm } from "widgets/Modals/ModalWatchLaterFilm";
import {
    closeModalFavourites,
    closeModalWatchLater,
} from "../../../store/modalFavouritesAndWatchLaterAndSettingsReducer";

import image2 from "../../../image/2.jpg";
import image3 from "../../../image/3.jpeg";
import image4 from "../../../image/4.jpeg";
import avatar from "../../../image/avatar.jpg";
import mstiteli from "../../../image/kartinki-mstiteli-14.jpg";
import mars from "../../../image/mars.jpg";
import {
    getIsVisibleFavourites,
    getIsVisibleWatchLater,
    getThemeType,
} from "../model/selectors/UserAccountSelectors";

export const UserAccount  = memo(() => {
    const isVisibleFavourites = useSelector(getIsVisibleFavourites);
    const isVisibleWatchLater = useSelector(getIsVisibleWatchLater);
    const themeType = useSelector(getThemeType);
    const dispatch = useDispatch();
    const handleCloseModalFavourites = useCallback(() => {
        dispatch(closeModalFavourites());
    }, [dispatch]);
    const handleCloseModalWatchLater = useCallback(() => {
        dispatch(closeModalWatchLater());
    }, [dispatch]);

    const [instance, setInstance] = useState<SwiperClass | null>(null);
    const swiperElRef = useRef<SwiperRef>(null);
    const carouselItems: string[] = [
        mstiteli,
        image2,
        image3,
        image4,
        mstiteli,
        image2,
        image3,
        image4,
        mstiteli,
        image2,
        image3,
        image4,
        mstiteli,
        image2,
        image3,
        image4,
    ];
    const favouritiesFilm: string[] = [
        avatar,
        avatar,
        avatar,
        avatar,
        avatar,
        avatar,
        avatar,
        avatar,
        avatar,
    ];
    const watchLaterFilm: string[] = [
        mars,
        mars,
        mars,
        mars,
        mars,
        mars,
        mars,
        mars,
        mars,
        mars,
        mars,
        mars,
    ];

    useEffect(() => {
        instance?.slideTo(2);
        console.log(swiperElRef.current?.swiper.activeIndex);
    }, [instance]);
    return (
        <>
            <Layout.Content
                style={{
                    paddingLeft: 50,
                    paddingRight: 50,
                    width: 1400,
                }}
            >
                <CarouselHistoryFilms
                    title="History"
                    carouselItems={carouselItems}
                />
            </Layout.Content>
            <FloatButtons />
            <ModalFavouritiesFilm
                title="Favourities"
                items={favouritiesFilm}
                isVisible={isVisibleFavourites}
                handleCloseModal={handleCloseModalFavourites}
            />
            <ModalWatchLaterFilm
                title="Watch Later"
                items={watchLaterFilm}
                isVisible={isVisibleWatchLater}
                handleCloseModal={handleCloseModalWatchLater}
            />
        </>
    );
});

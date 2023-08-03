import { Layout } from 'antd';
import { SwiperRef, SwiperClass } from 'swiper/react';
import { memo, useCallback } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useRef, useEffect, useState } from 'react';
import { closeModalFavourites, closeModalSettings, closeModalWatchLater } from '../../store/modalFavouritesAndWatchLaterAndSettingsReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import FloatButtons from '../../shared/FloatButtons/FloatButtons';
import CarouselHistoryFilms from '../../widgets/CarouselHistoryFilms/ui/CarouselHistoryFilms';
import ModalFavouritiesFilm from '../../widgets/Modals/ModalFavouritiesFilm/ModalFavouritiesFilm';
import ModalWatchLaterFilm from '../../widgets/Modals/ModalWatchLaterFilm/ModalWatchLaterFilm';

const UserAccount = () => {
	const isVisibleFavourites = useSelector((state: RootState) => state.modalFavouritesAndWatchLaterAndSettingsReducer.isVisibleFavourites);
	const isVisibleWatchLater = useSelector((state: RootState) => state.modalFavouritesAndWatchLaterAndSettingsReducer.isVisibleWatchLater);
	const isVisibleSettings = useSelector((state: RootState) => state.modalFavouritesAndWatchLaterAndSettingsReducer.isVisibleSettings);

	const dispatch = useDispatch();
	const handleCloseModalFavourites = useCallback(() => {
		dispatch(closeModalFavourites());
	}, [dispatch]);
	const handleCloseModalWatchLater = useCallback(() => {
		dispatch(closeModalWatchLater());
	}, [dispatch]);
	const handleCloseModalSetting = useCallback(() => {
		dispatch(closeModalSettings());
	}, [dispatch]);

	const [instance, setInstance] = useState<SwiperClass | null>(null);
	const swiperElRef = useRef<SwiperRef>(null);
	const carouselItems: string[] = [
		'../image/kartinki-mstiteli-14.jpg',
		'../image/2.jpg',
		'../image/3.jpeg',
		'../image/4.jpeg',
		'../image/kartinki-mstiteli-14.jpg',
		'../image/2.jpg',
		'../image/3.jpeg',
		'../image/4.jpeg',
		'../image/kartinki-mstiteli-14.jpg',
		'../image/2.jpg',
		'../image/3.jpeg',
		'../image/4.jpeg',
		'../image/kartinki-mstiteli-14.jpg',
		'../image/2.jpg',
		'../image/3.jpeg',
		'../image/4.jpeg',
		'../image/kartinki-mstiteli-14.jpg',
		'../image/2.jpg',
		'../image/3.jpeg',
		'../image/4.jpeg',
		'../image/kartinki-mstiteli-14.jpg',
		'../image/2.jpg',
		'../image/3.jpeg',
		'../image/4.jpeg',
		'../image/kartinki-mstiteli-14.jpg',
		'../image/2.jpg',
		'../image/3.jpeg',
		'../image/4.jpeg',
		'../image/kartinki-mstiteli-14.jpg',
		'../image/2.jpg',
		'../image/3.jpeg',
		'../image/4.jpeg',
		'../image/kartinki-mstiteli-14.jpg',
		'../image/2.jpg',
		'../image/3.jpeg',
		'../image/4.jpeg',
	];
	const favouritiesFilm: string[] = [
		'../image/avatar.jpg',
		'../image/avatar.jpg',
		'../image/avatar.jpg',
		'../image/avatar.jpg',
		'../image/avatar.jpg',
		'../image/avatar.jpg',
		'../image/avatar.jpg',
		'../image/avatar.jpg',
		'../image/avatar.jpg',
		'../image/avatar.jpg',
		'../image/avatar.jpg',
		'../image/avatar.jpg',
		'../image/avatar.jpg',
		'../image/avatar.jpg',
		'../image/avatar.jpg',
		'../image/avatar.jpg',
	];
	const watchLaterFilm: string[] = [
			'../image/mars.jpg',
			'../image/mars.jpg',
			'../image/mars.jpg',
			'../image/mars.jpg',
			'../image/mars.jpg',
			'../image/mars.jpg',
			'../image/mars.jpg',
			'../image/mars.jpg',
			'../image/mars.jpg',
			'../image/mars.jpg',
			'../image/mars.jpg',
			'../image/mars.jpg',
			'../image/mars.jpg',
			'../image/mars.jpg',
			'../image/mars.jpg',
			'../image/mars.jpg',
			'../image/mars.jpg',
			'../image/mars.jpg',
			'../image/mars.jpg',
			'../image/mars.jpg',		
	];

	useEffect(() => {
		instance?.slideTo(2);
		// ref usage
		console.log(swiperElRef.current?.swiper.activeIndex);
	}, [instance]);
	return (
		<>
			<Layout.Content style={{ paddingLeft: 50, paddingRight: 50, paddingBottom: 50, width: 500 }}>
				<CarouselHistoryFilms
					title='History'
					carouselItems={carouselItems}
				/>
			</Layout.Content>
			<FloatButtons />
			<ModalFavouritiesFilm
				title='Favourities'
				items={favouritiesFilm}
				isVisible={isVisibleFavourites}
				handleCloseModal={handleCloseModalFavourites}
			/>
			<ModalWatchLaterFilm
				title='Watch Later'
				items={watchLaterFilm}
				isVisible={isVisibleWatchLater}
				handleCloseModal={handleCloseModalWatchLater}
			/>
			{/* <ModalFloatButtons
				title='Settings'
				items={carouselItems}
				isVisible={isVisibleSettings}
				handleCloseModal={handleCloseModalSetting}
			/>  */}
		</>
	);
};

export default memo(UserAccount);

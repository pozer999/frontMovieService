import { BackTop, FloatButton, Layout, Modal } from 'antd';
import { SwiperRef, SwiperClass } from 'swiper/react';
import { useCallback } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useRef, useEffect, useState } from 'react';
import CarouselHistoryFilms from '../../widgets/CarouselHistoryFilms/CarouselHistoryFilms';
import { closeModalFavourites, closeModalSettings, closeModalWatchLater, openModalFavourites, openModalWatchLater } from '../../store/modalFavouritesAndWatchLaterAndSettingsReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import FloatButtons from '../../shared/FloatButtons/FloatButtons';

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
	useEffect(() => {
		instance?.slideTo(2);
		// ref usage
		console.log(swiperElRef.current?.swiper.activeIndex);
	}, []);
	return (
		<>
			<Layout.Content style={{ paddingLeft: 50, paddingRight: 50, paddingBottom: 50, width: 500 }}>
				<CarouselHistoryFilms
					title='History'
					carouselItems={carouselItems}
				/>
			</Layout.Content>
			<FloatButtons />
			<Modal
				title='Favourites'
				footer={[]}
				centered
				open={isVisibleFavourites}
				onCancel={handleCloseModalFavourites}
				width={1000}>
				<p>some contents...</p>
				<p>some contents...</p>
				<p>some contents...</p>
			</Modal>
			<Modal
				title='WatchLater'
				centered
				footer={[]}
				open={isVisibleWatchLater}
				onCancel={handleCloseModalWatchLater}
				width={1000}>
				<p>some contents...</p>
				<p>some contents...</p>
				<p>some contents...</p>
			</Modal>
			<Modal
				title='Setting'
				centered
				footer={[]}
				open={isVisibleSettings}
				onCancel={handleCloseModalSetting}
				width={1000}>
				<p>some contents...</p>
				<p>some contents...</p>
				<p>some contents...</p>
			</Modal>
		</>
	);
};

export default UserAccount;

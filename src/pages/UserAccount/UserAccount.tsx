import { Col, Divider, FloatButton, Layout, Row, Space } from 'antd';
import cls from './UserAccount.module.scss';
// import {Swiper as SwiperComponent, SwiperSlide} from 'swiper/react';
import { Swiper, SwiperRef, SwiperClass, SwiperSlide } from 'swiper/react';
import { EyeOutlined, HeartOutlined, SettingOutlined } from '@ant-design/icons';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useRef, useEffect, useState } from 'react';
import { Navigation, Scrollbar } from 'swiper/modules';
import CarouselHistoryFilms from '../../widgets/CarouselHistoryFilms/CarouselHistoryFilms';
import SquareItems from '../../widgets/SquareItems/SquareItems';
import { QuestionCircleOutlined } from '@ant-design/icons';

const UserAccount = () => {
	// const style: React.CSSProperties = { background: '#0092ff', };
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
				{/* <SquareItems /> */}
			</Layout.Content>
			<FloatButton.Group
				shape='circle'
				style={{ right: 24 }}>
				<FloatButton style={{width: 50, height: 50}} icon={<HeartOutlined size={50} style={{width: 50, height: 50}}/>} />
				<FloatButton style={{width: 50, height: 50}} icon={<EyeOutlined size={50} style={{width: 50, height: 50}}/>}/>
				<FloatButton style={{width: 50, height: 50}} icon={<SettingOutlined size={50} style={{width: 50, height: 50}}/>} />
			</FloatButton.Group>
		</>
	);
};

export default UserAccount;

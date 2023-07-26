import { Divider, Progress } from 'antd';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';

interface ICarouselHistoryFilms {
	title: any;
	carouselItems: string[];
}

const CarouselHistoryFilms = ({ title, carouselItems }: ICarouselHistoryFilms) => {
	// const [instance, setInstance] = useState<SwiperClass | null>(null);
	// const swiperElRef = useRef<SwiperRef>(null);

	// useEffect(() => {
	// 	instance?.slideTo(2);
	// 	// ref usage
	// 	console.log(swiperElRef.current?.swiper.activeIndex);
	// }, []);

	return (
		<>
			<Divider
				orientation='left'
				style={{ color: 'white', fontSize: 25 }}>
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
				// ref={swiperElRef}
				// onSwiper={setInstance}
			>
				{carouselItems.map((item, index) => (
					<SwiperSlide key={index}>
						<>
						<img
							style={{ height: '95%', borderRadius: 5, width: 400, zIndex: 1, position: "relative" }}
							src={item}
							alt=''
						/>
						<Progress
							style={{ zIndex: 2, width: 400, position: "absolute", bottom: 0, left: 0, height: 4 }}
							percent={Math.random()* (90 - 30) + 30}
							showInfo={false}
						/>
						</>
					</SwiperSlide>
				))}
			</Swiper>
			<Divider orientation='left' />
		</>
	);
};

export default CarouselHistoryFilms;

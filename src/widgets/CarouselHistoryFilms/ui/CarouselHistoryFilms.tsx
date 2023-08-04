import { Divider } from 'antd';
import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import './CarouselHisroryFilms.module.scss';
import { ItemHistoryFilmsCarousel } from 'entities/ItemHistoryFilmsCarousel';
interface ICarouselHistoryFilms {
	title: any;
	carouselItems: string[];
}

export const CarouselHistoryFilms = memo(({ title, carouselItems }: ICarouselHistoryFilms) => {
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
						<ItemHistoryFilmsCarousel item={item}/>
					</SwiperSlide>
				))}
			</Swiper>
			<Divider orientation='left' />
		</>
	);
});


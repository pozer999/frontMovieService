import { HeartTwoTone } from '@ant-design/icons';
import { memo } from 'react';
import { SwiperSlide } from 'swiper/react';

interface IFavouritiesFilm {
	src: string;
}

export const FavouritiesFilm = memo(({ src }: IFavouritiesFilm) => {
	return (
		<div>
			<img
				src={src}
				alt='film'
				style={{ width: '100%', height: '100%' }}
			/>
			<img
				src={src}
				alt='film'
				style={{ width: '100%', height: '100%' }}
			/>
			<img
				src={src}
				alt='film'
				style={{ width: '100%', height: '100%' }}
			/>
			<img
				src={src}
				alt='film'
				style={{ width: '100%', height: '100%' }}
			/>
			<img
				src={src}
				alt='film'
				style={{ width: '100%', height: '100%' }}
			/>
			<HeartTwoTone style={{ position: 'absolute', top: 5, right: 5, fontSize: 25 }} />
		</div>
	);
});

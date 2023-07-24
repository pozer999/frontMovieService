import React from 'react';
import cls from './CarouselFilms.module.scss';
import { Carousel } from 'antd';

const CarouselFilms = () => {
  const onChange = (currentSlide: number) => {
		console.log('currentSlide: ', currentSlide);
	};

	let carouselItems: string[] = [
		'../image/kartinki-mstiteli-14.jpg',
		'../image/2.jpg',
		'../image/3.jpeg',
		'../image/4.jpeg',
	]
  
  return (
    <div>
				<Carousel
					afterChange={onChange}
					autoplay
					className={cls.carousel}>
						{
							carouselItems.map(item => 
								<img src={item} alt="" className={cls.imageCarousel}/>
							)
						}
				</Carousel>
    </div>
  );
};

export default CarouselFilms;
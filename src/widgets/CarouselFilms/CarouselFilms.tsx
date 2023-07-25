import cls from './CarouselFilms.module.scss';
import { Carousel } from 'antd';


const CarouselFilms = () => {
  const onChange = (currentSlide: number) => {
		console.log('currentSlide: ', currentSlide);
	};

	const carouselItems: string[] = [
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
							carouselItems.map((item, index) => 
								<img src={item} alt="" className={cls.imageCarousel} key = {index}/>
							)
						}
				</Carousel>
    </div>
  );
};

export default CarouselFilms;
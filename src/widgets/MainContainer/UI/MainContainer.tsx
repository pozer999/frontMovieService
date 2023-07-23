import { Carousel, Col, Row } from 'antd';
import cls from './MainContainer.module.scss';
import SortedAndInput from '../../../features/SortedAndInput/ui/SortedAndInput';
import ListFilms from '../../ListFilms/ListFilms';

export const MainContainer = () => {
  const onChange = (currentSlide: number) => {
    console.log("currentSlide: ", currentSlide);
  };
	return (
		<Row justify='center'>
      <>
			<Carousel
      afterChange={onChange}
				autoplay
        className={cls.carousel}
			> 
				<div>
					<img
          className={cls.imageCarousel}
						src="../image/kartinki-mstiteli-14.jpg"
						alt=''
					/>
				</div>
				<div>
					<img
           className={cls.imageCarousel}
						src="../image/2.jpg"
						alt=''
					/>
				</div>
				<div>
					<img
            className={cls.imageCarousel}
						src="../image/3.jpeg"
						alt=''
					/>
				</div>
				<div>
					<img
             className={cls.imageCarousel}
						src="../image/4.jpeg"
						alt=''
					/>
				</div>
			</Carousel>
      <img src="../image/lenta.png" alt="" style={{position: "absolute", zIndex: 0}}/>
      </>
			<Col
				span={20}
				style={{ backgroundColor: '#2e2e2e', marginTop: 30, borderRadius: 15 }}>
				<SortedAndInput />
				<ListFilms />
			</Col>
		</Row>
	);
};

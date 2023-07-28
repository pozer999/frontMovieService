import { Badge, Modal } from 'antd';
import { Grid, Pagination, Navigation } from 'swiper/modules';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { ClockCircleOutlined } from '@ant-design/icons';

interface IModalFloatButtons {
	title: string;
	isVisible: boolean;
	handleCloseModal: any;
}

const ModalFloatButtons = ({ title, isVisible, handleCloseModal }: IModalFloatButtons) => {
	return (
		<Modal
			title={title}
			style={{ fontSize: 80 }}
			footer={[]}
			centered
			open={isVisible}
			onCancel={handleCloseModal}
			width={1000}>
			<>
				<Swiper
					slidesPerView={5}
					grid={{
						rows: 1,
					}}
					spaceBetween={30}
					pagination={{
						dynamicBullets: true,
					}}
					navigation={true}
					modules={[Grid, Pagination, Navigation]}
					className='mySwiper'>
					<SwiperSlide style={{ background: 'gray', fontSize: '18px', height: '250px', width: '200px', color: 'white' }}>1</SwiperSlide>

					<SwiperSlide style={{ textAlign: 'center', background: 'gray', fontSize: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', width: '200px' }}></SwiperSlide>
					<SwiperSlide style={{ textAlign: 'center', background: 'gray', fontSize: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', width: '200px' }}></SwiperSlide>
					<SwiperSlide style={{ textAlign: 'center', background: 'gray', fontSize: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', width: '200px' }}></SwiperSlide>
					<SwiperSlide style={{ textAlign: 'center', background: 'gray', fontSize: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', width: '200px' }}></SwiperSlide>
					<SwiperSlide style={{ textAlign: 'center', background: 'gray', fontSize: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', width: '200px' }}></SwiperSlide>
					<SwiperSlide style={{ textAlign: 'center', background: 'gray', fontSize: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', width: '200px' }}></SwiperSlide>
					<SwiperSlide style={{ textAlign: 'center', background: 'gray', fontSize: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', width: '200px' }}></SwiperSlide>
					<SwiperSlide style={{ textAlign: 'center', background: 'gray', fontSize: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', width: '200px' }}></SwiperSlide>
					<SwiperSlide style={{ textAlign: 'center', background: 'gray', fontSize: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', width: '200px' }}></SwiperSlide>
				</Swiper>
			</>
		</Modal>
	);
};

export default ModalFloatButtons;

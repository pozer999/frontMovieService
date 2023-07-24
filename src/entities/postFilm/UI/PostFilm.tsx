import React from 'react';
import cls from './PostFilm.module.scss';
import { Badge, Card, Image, Rate, Row } from 'antd';
import Meta from 'antd/es/card/Meta';
import { HeartOutlined, HeartTwoTone } from '@ant-design/icons';
const PostFilm = ({ film }: any) => {
	console.log('film: ', film);
	return (
		// <Row style={{ color: 'white', padding: 10, borderRadius: '5%' }}>
		//   <Row justify="start">{film.release_year}</Row>
		//   <Row justify="start">
		//     <Image
		//       style={{ borderRadius: '5%' }}
		//       src="../image/mstiteli-voyna-beskonechnosti-2160x3840-mstiteli-voyna-beskonechnosti-17937.jpg"
		//       alt="film"
		//     />
		//   </Row>
		//   <Row justify="start">
		//     {film.title}
		//     <br />
		//     {film.genre}
		//   </Row>
		// </Row>
		<Badge
			count={film.rating}
			color='green'>
			<div style={{ border: '1px solid grey', borderRadius: 8 }}>
				<Card
					loading={false}
					hoverable
					cover={
						<img
							alt='example'
							src='../image/mstiteli-voyna-beskonechnosti-2160x3840-mstiteli-voyna-beskonechnosti-17937.jpg'
						/>
					}>
					<Meta
						title={[film.title, ' · ', film.release_year]}
						description={film.genre}
					/>
					<Meta description={film.actors} />
				</Card>
			</div>
		</Badge>
	);
};

export default PostFilm;

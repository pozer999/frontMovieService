import { Col, Layout, Row } from 'antd';
import cls from './UserAccount.module.scss';
import Flickity from 'react-flickity-component';

const UserAccount = () => {
	const style: React.CSSProperties = { background: '#0092ff' };
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
	];
	const flickityOptions = {
		initialIndex: 2,
	};
	return (
		<Layout.Content style={{ padding: 50, width: 500, height: 200}}>
			<Flickity
				className={cls.carousel}
				elementType={'div'}
				options={flickityOptions} 
				disableImagesLoaded={true} 
				reloadOnUpdate 
				static
			>
				{carouselItems.map((item, index) => (
					<img
						src={item}
						alt=''
						className={cls.imageCarousel}
						key={index}
					/>
				))}
			</Flickity>
			<Row
				justify='space-around'
				align='middle'>
				<Col
					style={style}
					span={5}>
					Favorites
				</Col>
				<Col
					style={style}
					span={5}>
					Watch later
				</Col>
				<Col
					style={style}
					span={5}>
					Settings
				</Col>
			</Row>
		</Layout.Content>
	);
};

export default UserAccount;

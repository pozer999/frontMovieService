import { Col, Row } from 'antd';
import cls from './MainContainer.module.scss';
import SortedAndInput from '../../../features/SortedAndInput/ui/SortedAndInput';
import ListFilms from '../../ListFilms/ui/ListFilms';
import CarouselFilms from '../../CarouselFilms/ui/CarouselFilms';



export const MainContainer = () => {

	return (
		<Row justify='center' style={{borderRadius: 40}}>
			<CarouselFilms />
			<Col
				span={20}
				className={cls.inputAndFilmsContainer}>
				<SortedAndInput />
				<ListFilms />
			</Col>
		</Row>
	);
};

import { Col, Row, Spin } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms } from '../../store/FilmsSlice';
import { AppDispatch } from '../../store';
import PostFilm from '../../entities/postFilm/UI/PostFilm';

const ListFilms = () => {
	const dispatch = useDispatch<AppDispatch>();
	const filter = useSelector((state: any) => state.films.filter);
	const films = useSelector((state: any) => state.films.films);
	console.log('list: ', films);
	useEffect(() => {
		dispatch(fetchFilms(filter));
	}, [filter]);
	return (
		<div>
			{films.length !== 0 ?
			<Row
				gutter={[16, 24]}
				style={{ margin: 10, marginTop: 45}}>
				{films.map((film: any, i: number) => (
					<Col
						className='gutter-row'
						span={6}
						key={i}>
						<PostFilm film={film} />
					</Col>
				))}
			</Row>
			:
      <Spin tip="Loading" size="large" style={{ alignItems: "center", display: "flex", justifyContent: "center", marginTop: 30}}>
      </Spin>}
		</div>
	);
};
export default ListFilms;

import { Col, Row } from 'antd';

import PostFilm from '../../entities/postFilm/UI/PostFilm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms, filmsActions } from '../../store/FilmsSlice';
import { filters } from '../../shared/const/filters';
import { AppDispatch } from '../../store';
const ListFilms = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filter = useSelector((state: any) => state.films.filter);
  const films = useSelector((state: any) => state.films.films);
  console.log('list');
  console.log(films);
  useEffect(() => {
    dispatch(fetchFilms(filter));
  }, [filter]);
  return (
    <Row gutter={[16, 24]} style={{ marginTop: '25px' }}>
      {films.map((film: any, i: number) => (
        <Col className="gutter-row" span={6} key={i}>
          <PostFilm film={film} />
        </Col>
      ))}
    </Row>
  );
};
export default ListFilms;

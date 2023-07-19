import { Col, Row } from 'antd';
import React from 'react';
import PostFilm from '../../entities/postFilm/UI/PostFilm';

const ListFilms = () => {
  return (
    <Row gutter={[16, 24]} style={{ marginTop: '25px' }}>
        {new Array(20).fill(null).map((_, index) => (
            <Col className="gutter-row" span={6} key={index}>
                <PostFilm/>
            </Col>
        ))}
    </Row>
  );
};

export default ListFilms;
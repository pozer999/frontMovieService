import React from 'react';
import cls from './PostFilm.module.scss';
import { Row } from 'antd';
const PostFilm = () => {
  return (
    <Row style={{color: "white", padding: 10}} >
        <Row justify="start">
          2017
        </Row>
        <Row justify="start">
          <img src='../image/mstiteli-voyna-beskonechnosti-2160x3840-mstiteli-voyna-beskonechnosti-17937.jpg' alt="" style={{width: "90%"}}/>
        </Row>
        <Row justify="start">
          title
          <br/>
          theme
        </Row>
    </Row>
  );
};

export default PostFilm;
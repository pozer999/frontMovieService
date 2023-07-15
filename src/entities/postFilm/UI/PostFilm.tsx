import React from 'react';
import cls from './PostFilm.module.scss';
import { Image, Row } from 'antd';
const PostFilm = () => {
  return (
    <Row style={{color: "white", padding: 10, borderRadius: "5%"}} >
        <Row justify="start">
          2017
        </Row>
        <Row justify="start">
          <Image style={{borderRadius: "5%"}}  src='../image/mstiteli-voyna-beskonechnosti-2160x3840-mstiteli-voyna-beskonechnosti-17937.jpg' alt="" />
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
import { Col, Row } from 'antd';
import React from 'react';
import { EyeOutlined, HeartOutlined, SettingOutlined } from '@ant-design/icons';
import cls from './SquareItems.module.scss';

const SquareItems = () => {
  return (
    <Row
    style={{ marginTop: 30 }}
    justify='space-around'
    align='middle'>
    <Col className={cls.squareItem}>
      <HeartOutlined className={cls.squareItem_Icon} />
      Favorites
    </Col>
    <Col className={cls.squareItem}>
      <EyeOutlined className={cls.squareItem_Icon} />
      Watch later
    </Col>
    <Col className={cls.squareItem}>
      <SettingOutlined className={cls.squareItem_Icon} />
      Settings
    </Col>
  </Row>
  );
};

export default SquareItems;
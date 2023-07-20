import { Col, Row } from 'antd';
import cls from './MainContainer.module.scss';
import SortedAndInput from '../../../features/SortedAndInput/ui/SortedAndInput';
import ListFilms from '../../ListFilms/ListFilms';

export const MainContainer = () => (
  <Row justify="center">
    <Col
      span={20}
      style={{ backgroundColor: '#2e2e2e', marginTop: 30, borderRadius: 15 }}
    >
      <SortedAndInput />
      <ListFilms />
    </Col>
  </Row>
);

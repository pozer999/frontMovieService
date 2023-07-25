import { Button, Col, Input, Row, Select, Space } from 'antd';

import { useDispatch, useSelector } from 'react-redux';

import { filmsActions } from '../../../store/FilmsSlice';
import { filters } from '../../../shared/const/filters';

const SortesAndInput = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state: any) => state.films.filters);
  const handleChange = (value: string) => {
    dispatch(filmsActions.changeFilters(value));
  };
  return (
    <Row justify="space-between" align="middle" style={{ margin: 10 }}>
      <Col span={14}>
        <Select
          defaultValue={currentFilter}
          style={{ width: 140 }}
          placement="bottomLeft"
          options={filters}
          onChange={handleChange}
        />
      </Col>
      <Col span={10}>
        <Space.Compact style={{ width: '100%' }}>
          <Input placeholder='Enter the name of the movie'/>
          <Button type="primary">Search</Button>
        </Space.Compact>
      </Col>
    </Row>
  );
};

export default SortesAndInput;

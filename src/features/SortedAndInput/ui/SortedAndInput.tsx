import { Button, Col, Input, Row, Select, Space } from 'antd';
import React from 'react';
import cls from "./SortedAndInput.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { selected } from '../../../store/SortedSlice';
import store from '../../../store';
// import { sortedFilms } from '../../../store/FilmsSlice';

// interface IState {
//   films: string
// };

const SortesAndInput = () => {
  const dispatch = useDispatch();
  // const selector = useSelector((state: IState) => state.films);
  return (
    <Row justify="space-between" align="middle" style={{margin: 10}}>
    <Col span={14}>
         <Select defaultValue="By date" style={{ width: 140 }} placement="bottomLeft" 
            onChange={(e) => dispatch(selected(e))} 
            
            options={[
                {value: 'By date', label: 'By date'},
                {value: 'By alphabet', label: 'By alphabet'},
                {value: 'By raiting',label: 'By raiting'},
                ]}
            />
    </Col>
    <Col span={10}>
        <Space.Compact style={{width: "100%"}} >
            <Input/>
            <Button type='primary' onClick={() => console.log(store.getState().sorted.films)}>Search</Button>
        </Space.Compact>
    </Col>
</Row>
  );
};

export default SortesAndInput;
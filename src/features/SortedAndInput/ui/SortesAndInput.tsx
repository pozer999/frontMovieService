import { Button, Col, Input, Row, Select, Space } from 'antd';
import React from 'react';
import cls from "./SortesAndInput.module.scss";

const SortesAndInput = () => {
  return (
    <Row justify="space-between" align="middle" style={{margin: 10}}>
    <Col span={14}>
         <Select defaultValue="By date" style={{ width: 140 }} placement="bottomLeft"
                options={[
                {
                    value: 'By date',
                    label: 'By date',
                },
                {
                    value: 'By alphabet',
                    label: 'By alphabet',
                },
                {
                    value: 'By raiting',
                    label: 'By raiting',
                },
                ]}
            />
    </Col>
    <Col span={10}>
        <Space.Compact style={{width: "100%"}} >
            <Input/>
            <Button type='primary'>Search</Button>
        </Space.Compact>
    </Col>
</Row>
  );
};

export default SortesAndInput;
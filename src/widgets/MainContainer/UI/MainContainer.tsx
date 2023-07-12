import {Col, Layout, Row, Button, Input, Space} from 'antd';
import cls from './MainContainer.module.scss';


export const MainContainer = () => (
    <Layout.Content>
        <Row justify="center">
            <Col span={14} style={{ backgroundColor: 'gray', marginTop: 30, height: '400px', width: '1100px' }}>
                <Row justify="start" align="middle" style={{marginTop: 10}}>
                    <Col span={16}>
                        <Button className={cls.buttonUpperLayout}>by date</Button>
                        <Button className={cls.buttonUpperLayout}>by alphabet</Button>
                        <Button className={cls.buttonUpperLayout}>by raiting</Button>
                    </Col>
                    <Col span={8}>
                        <Space.Compact>
                            <Input />
                            <Button className={cls.buttonUpperLayout}>Search</Button>
                        </Space.Compact>
                    </Col>
                </Row>
                <Row gutter={[16, 24]} style={{ marginTop: '25px' }}>
                    {new Array(20).fill(null).map((_, index) => (
                        <Col className="gutter-row" span={6} key={index}>
                            <div style={{ textAlign: 'center' }}>col-6</div>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    </Layout.Content>
);

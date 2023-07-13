import {Col, Row, Button, Input, Space} from 'antd';
import cls from './MainContainer.module.scss';
import PostFilm from '../../../entities (бизнес-объекты(продукт, заказ))/postFilm/UI/PostFilm';


export const MainContainer = () => (
        <Row justify="center">
            <Col span={20} style={{ backgroundColor: "#2e2e2e", marginTop: 30 }}>
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
                            <PostFilm/>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
);

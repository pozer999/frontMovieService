import {Col, Row} from 'antd';
import cls from './MainContainer.module.scss';
import PostFilm from '../../../entities/postFilm/UI/PostFilm';
import SortesAndInput from '../../../features/SortedAndInput/ui/SortesAndInput';


export const MainContainer = () => (
        <Row justify="center">
            <Col span={20} style={{ backgroundColor: "#2e2e2e", marginTop: 30, borderRadius: 15 }}>
               <SortesAndInput />
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

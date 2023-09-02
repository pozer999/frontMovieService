import { Col, Row } from "antd";
import cls from "./MainContainer.module.scss";
import { ListFilms } from "widgets/ListFilms";
import { CarouselFilms } from "widgets/CarouselFilms";
import { memo } from "react";
import { SortedAndInput } from "features/SortedAndInput/ui/SortedAndInput";


export const MainContainer = memo(() => {
    return (
        <Row justify="center" style={{ borderRadius: 40 }}>
            <CarouselFilms />
            <Col span={20} className={cls.inputAndFilmsContainer}>
                <SortedAndInput/>
                <ListFilms />
            </Col>
        </Row>
    );
});

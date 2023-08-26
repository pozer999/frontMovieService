import { Col, Row } from "antd";
import cls from "./MainContainer.module.scss";
import { ListFilms } from "widgets/ListFilms";
import { CarouselFilms } from "widgets/CarouselFilms";
import { SortedAndInput } from "features/SortedAndInput";
import { memo } from "react";

export const MainContainer = memo(() => {
    return (
        <Row justify="center" style={{ borderRadius: 40 }}>
            <CarouselFilms />
            <Col span={20} className={cls.inputAndFilmsContainer}>
                <SortedAndInput />
                <ListFilms />
            </Col>
        </Row>
    );
});

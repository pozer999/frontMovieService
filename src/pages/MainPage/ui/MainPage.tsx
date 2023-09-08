import cls from "./MainPage.module.scss";
import { ListFilms } from "widgets/ListFilms";
import { CarouselFilms } from "entities/CarouselFilms";
import { memo, useEffect } from "react";
import { SortedAndInput } from "features/SortedAndInput/ui/SortedAndInput";
import { useSelector } from "react-redux";
import { getFilters } from "../model/selectors/MainPageSelectors";
import { Col, Row } from "antd";

export const MainPage = memo(() => {
    const filters = useSelector(getFilters);

    useEffect(() => {
        console.log("filters: ", filters);
    }, [filters]);

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

export default MainPage;

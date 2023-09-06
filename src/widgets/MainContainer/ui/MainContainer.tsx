import { Row } from "antd";
import cls from "./MainContainer.module.scss";
import { ListFilms } from "widgets/ListFilms";
import { CarouselFilms } from "widgets/CarouselFilms";
import { memo } from "react";
import { SortedAndInput } from "features/SortedAndInput/ui/SortedAndInput";
import ColComponent from "shared/ui/col/ColComponent";


export const MainContainer = memo(() => {
    return (
        <Row justify="center" style={{ borderRadius: 40 }}>
            <CarouselFilms />
            <ColComponent span={20} className={cls.inputAndFilmsContainer}>
                <SortedAndInput/>
                <ListFilms />
            </ColComponent>
        </Row>
    );
});

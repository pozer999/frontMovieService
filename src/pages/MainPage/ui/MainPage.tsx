import cls from "./MainPage.module.scss";
import { ListFilms } from "widgets/ListFilms";
import { CarouselFilms } from "entities/CarouselFilms";
import { memo, useEffect } from "react";
import { SortedAndInput } from "features/SortedAndInput/ui/SortedAndInput";
import { useSelector } from "react-redux";
import { getFilters } from "../model/selectors/MainPageSelectors";
import { ARow } from "shared/ui/row";
import { ACol } from "shared/ui/col";

export const MainPage = memo(() => {
    const filters = useSelector(getFilters);

    useEffect(() => {
        console.log("filters: ", filters);
    }, [filters]);

    return (
        <ARow justify="center" style={{ borderRadius: 40 }}>
            <CarouselFilms />
            <ACol span={20} className={cls.inputAndFilmsContainer}>
                <SortedAndInput />
                <ListFilms />
            </ACol>
        </ARow>
    );
});

export default MainPage;

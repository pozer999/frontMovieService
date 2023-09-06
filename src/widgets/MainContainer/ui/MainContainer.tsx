
import cls from "./MainContainer.module.scss";
import { ListFilms } from "widgets/ListFilms";
import { CarouselFilms } from "widgets/CarouselFilms";
import { memo } from "react";
import { SortedAndInput } from "features/SortedAndInput/ui/SortedAndInput";
import ACol from "shared/ui/col/ui/ACol";
import ARow from "shared/ui/row/ui/ARow";


export const MainContainer = memo(() => {
    return (
        <ARow justify="center" style={{ borderRadius: 40 }}>
            <CarouselFilms />
            <ACol span={20} className={cls.inputAndFilmsContainer}>
                <SortedAndInput/>
                <ListFilms />
            </ACol>
        </ARow>
    );
});

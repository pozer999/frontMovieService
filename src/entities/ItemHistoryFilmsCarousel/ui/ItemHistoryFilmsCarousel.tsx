import { Progress } from "antd";
import { memo } from "react";

import cls from "./ItemHistoryFilmsCarousel.module.scss";
import { NavLink } from "react-router-dom";

interface IitemHistoryFilmsCarousel {
    item: string;
}

export const ItemHistoryFilmsCarousel = memo(
    (props: IitemHistoryFilmsCarousel) => {
        const { item } = props;
        return (
            <>
                <NavLink to="/movie">
                    <img className={cls.imageItem} src={item} alt="film" />
                    <Progress
                        className={cls.progressItem}
                        percent={Math.random() * (90 - 30) + 30}
                        showInfo={false}
                    />
                </NavLink>
            </>
        );
    }
);

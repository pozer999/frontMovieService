import { Progress } from "antd";
import { memo } from "react";

import cls from "./ItemHistoryFilmsCarousel.module.scss";

interface IitemHistoryFilmsCarousel {
    item: string;
}

export const ItemHistoryFilmsCarousel = memo(
    (props: IitemHistoryFilmsCarousel) => {
        const { item } = props;
        return (
            <>
                <img className={cls.imageItem} src={item} alt="film" />
                <Progress
                    className={cls.progressItem}
                    percent={Math.random() * (90 - 30) + 30}
                    showInfo={false}
                />
            </>
        );
    }
);

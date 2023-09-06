import {
    EyeOutlined,
    FormatPainterOutlined,
    HeartOutlined,
} from "@ant-design/icons";
import { FloatButton } from "antd";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { getTypeTheme } from "widgets/CurrentFilm/model/selectors/CurrentFilmSelectors";
import {
    changeTheme,
    openModalFavourites,
    openModalWatchLater,
} from "../../../../store/modalFavouritesAndWatchLaterAndSettingsReducer";

import cls from "./FloatButtons.module.scss";

export const FloatButtons = memo(() => {
    const dispatch = useAppDispatch();

    const typeTheme = useSelector(getTypeTheme);

    const handleOpenModalFavourites = useCallback(() => {
        dispatch(openModalFavourites());
    }, [dispatch]);
    const handleOpenModalWatchLater = useCallback(() => {
        dispatch(openModalWatchLater());
    }, [dispatch]);
    const handleChangeTheme = useCallback(() => {
        dispatch(changeTheme());
        localStorage.setItem("theme", typeTheme);
    }, [dispatch, typeTheme]);

    return (
        <FloatButton.Group shape="circle" className={cls.floatButtonPosition}>
            <FloatButton
                onClick={handleOpenModalFavourites}
                tooltip={<div>Favorites</div>}
                icon={<HeartOutlined />}
            />
            <FloatButton
                onClick={handleOpenModalWatchLater}
                tooltip={<div>Watch later</div>}
                icon={<EyeOutlined />}
            />
            <FloatButton
                type={typeTheme === "dark" ? "default" : "primary"}
                onClick={handleChangeTheme}
                tooltip={<div>Theme</div>}
                icon={<FormatPainterOutlined />}
            />
        </FloatButton.Group>
    );
});

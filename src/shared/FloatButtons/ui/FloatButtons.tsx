import { FloatButton } from "antd";
import {
    EyeOutlined,
    FormatPainterOutlined,
    HeartOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import {
    changeTheme,
    openModalFavourites,
    openModalWatchLater,
} from "../../../store/modalFavouritesAndWatchLaterAndSettingsReducer";
import { RootState } from "store";

export const FloatButtons = memo(() => {
    const dispatch = useDispatch();
    const handleOpenModalFavourites = useCallback(() => {
        dispatch(openModalFavourites());
    }, [dispatch]);
    const handleOpenModalWatchLater = useCallback(() => {
        dispatch(openModalWatchLater());
    }, [dispatch]);
    const handleChangeTheme = useCallback(() => {
        dispatch(changeTheme());
    }, [dispatch]);

    const typeTheme = useSelector((state: RootState) => state.modalFavouritesAndWatchLaterAndSettingsReducer.themeType)

    return (
        <FloatButton.Group shape="circle" style={{position: "absolute", right: 50 , bottom: 30 }}>
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
                type={typeTheme === 'dark' ? "default" : "primary"}
                onClick={handleChangeTheme}
                tooltip={<div>Theme</div>}
                icon={<FormatPainterOutlined />}
            />
        </FloatButton.Group>
    );
});

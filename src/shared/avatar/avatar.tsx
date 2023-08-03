import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./avatar.module.scss";

interface avatarProps {
    className?: string;
}

export const avatar: FC<avatarProps> = memo((props) => {
    const { className } = props;
    const { t } = useTranslation();

    return <div className={classNames(cls.avatar, {}, [className])}></div>;
});

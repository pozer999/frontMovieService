import ReactPlayer from "react-player/lazy";
import { BlockComments } from "widgets/BlockComments";
import { BlockStatistic } from "widgets/BlockStatistic";
import { BtnsFeedback } from "widgets/BtnsFeedback";
import cls from "./MoviePage.module.scss";
import { ADivider } from "shared/ui/divider";


export const MoviePage = () => {
    return (
        <div className={cls.wrapperVideo}>
            <ADivider
                orientation="center"
                style={{ fontSize: 35, marginTop: 30 }}
            >
                The martian
            </ADivider>
            <ReactPlayer
                width="90%"
                height="90%"
                style={{ margin: "20px auto" }}
                url="https://youtu.be/GLGd9FAEjpo?si=C5SWr19-ssHZDk5J"
                controls={true}
            />
            <BtnsFeedback />
            <BlockStatistic />
            <BlockComments />
        </div>
    );
};

export default MoviePage;

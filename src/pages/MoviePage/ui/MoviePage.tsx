import { Divider } from "antd";
import ReactPlayer from "react-player/lazy";
import { BlockComments } from "widgets/BlockComments";
import { BlockStatistic } from "widgets/BlockStatistic";
import { BtnsFeedback } from "widgets/BtnsFeedback";
import cls from "./MoviePage.module.scss";


export const MoviePage = () => {
    return (
        <div className={cls.wrapperVideo}>
            <Divider
                orientation="center"
                style={{ fontSize: 35, marginTop: 30 }}
            >
                The martian
            </Divider>
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

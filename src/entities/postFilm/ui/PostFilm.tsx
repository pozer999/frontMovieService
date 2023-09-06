import cls from "./PostFilm.module.scss";
import { Badge } from "antd";
import Meta from "antd/es/card/Meta";
import { memo } from "react";
import CardComponent from "shared/ui/card/CardComponent";

interface IPostFilm {
    film: any;
}
export const PostFilm = memo((props: IPostFilm) => {
    const { film } = props;
    console.log("film: ", film);
    return (
        <Badge count={film.rating} color="green">
            <div className={cls.containerPost}>
                <CardComponent
                    loading={false}
                    hoverable
                    cover={
                        <img
                            alt="example"
                            src="../image/mstiteli-voyna-beskonechnosti-2160x3840-mstiteli-voyna-beskonechnosti-17937.jpg"
                            // шаблон
                        />
                    }
                >
                    <Meta
                        title={[film.title, " · ", film.release_year]}
                        description={film.genre}
                    />
                    <Meta description={film.actors} />
                </CardComponent>
            </div>
        </Badge>
    );
});

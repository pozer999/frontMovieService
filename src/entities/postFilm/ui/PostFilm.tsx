import cls from "./PostFilm.module.scss";
import { Badge } from "antd";
import Meta from "antd/es/card/Meta";
import { memo } from "react";
import { ACard } from "shared/ui/card";

interface IPostFilm {
    film: any;
}
export const PostFilm = memo((props: IPostFilm) => {
    const { film } = props;
    console.log("film: ", film);
    return (
        <Badge count={film.rating} color="green">
            <div className={cls.containerPost}>
                <ACard
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
                </ACard>
            </div>
        </Badge>
    );
});

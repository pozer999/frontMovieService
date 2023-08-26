import cls from "./PostFilm.module.scss";
import { Badge, Card } from "antd";
import Meta from "antd/es/card/Meta";
import { memo } from "react";
export const PostFilm = memo(({ film }: any) => {
    console.log("film: ", film);
    return (
        <Badge count={film.rating} color="green">
            <div className={cls.containerPost}>
                <Card
                    loading={false}
                    hoverable
                    cover={
                        <img
                            alt="example"
                            src="../image/mstiteli-voyna-beskonechnosti-2160x3840-mstiteli-voyna-beskonechnosti-17937.jpg"
                        />
                    }
                >
                    <Meta
                        title={[film.title, " · ", film.release_year]}
                        description={film.genre}
                    />
                    <Meta description={film.actors} />
                </Card>
            </div>
        </Badge>
    );
});

import cls from "./PostFilm.module.scss";
import {  memo } from "react";
import { ABadge } from "shared/ui/badge";
import { ACard } from "shared/ui/card";
import { AMeta } from "shared/ui/meta";

interface IPostFilm {
    film: any;
}
export const PostFilm = memo((props: IPostFilm) => {
    const { film } = props;
    console.log("film: ", film);
    return (
        <ABadge count={film.rating} color="green">
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
                    <AMeta
                        title={[film.title, " · ", film.release_year]}
                        description={film.genre}
                    />
                    <AMeta description={film.actors} />
                </ACard>
            </div>
        </ABadge>
    );
});

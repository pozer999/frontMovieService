import cls from "./CarouselFilms.module.scss";
import { Carousel } from "antd";
import { FC, memo } from "react";

export const CarouselFilms: FC = memo(() => {
    const carouselItems: string[] = [
        "../image/kartinki-mstiteli-14.jpg",
        "../image/2.jpg",
        "../image/3.jpeg",
        "../image/4.jpeg",
    ];

    return (
        <div>
            <Carousel autoplay className={cls.carousel}>
                {carouselItems.map((item, index) => (
                    <img
                        src={item}
                        alt=""
                        className={cls.imageCarousel}
                        key={index}
                    />
                ))}
            </Carousel>
        </div>
    );
});


// export default memo(CarouselFilms);

import cls from "./CarouselFilms.module.scss";
import { Carousel, Row } from "antd";
import { FC, memo } from "react";
import mstiteli from "../../../image/kartinki-mstiteli-14.jpg";
import image2 from "../../../image/2.jpg";
import image3 from "../../../image/3.jpeg";
import image4 from "../../../image/4.jpeg";
import { NavLink } from "react-router-dom";
// import { Typography } from "antd";
// import Title from "antd/es/typography/Title";

export const CarouselFilms = memo(() => {
    const carouselItems: string[] = [mstiteli, image2, image3, image4];

    return (
        <div>
            <Carousel autoplay className={cls.carousel}>
                {carouselItems.map((item, index) => (
                    <NavLink to="/movie" key={index}>
                        <img src={item} alt="" className={cls.imageCarousel} />
                        <Row className={cls.titleAndDescriptionFilms}>
                            <Row className={cls.titleFilms}>Name film</Row>
                            <Row className={cls.descriptionFilms}>
                                Lorem ipsum dolor sit amet consectetur<br />
                                adipisicing elit.
                                Consequuntur cumque, et obcaecati porro eius<br />
                                facilis illo molestiae asperiores soluta, rerum
                                minus
                            </Row>
                        </Row>
                    </NavLink>
                ))}
            </Carousel>
        </div>
    );
});

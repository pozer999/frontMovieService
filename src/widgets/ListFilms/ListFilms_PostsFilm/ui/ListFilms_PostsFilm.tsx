import { Col, Row } from "antd";
import { PostFilm } from "entities/postFilm";


interface IListFilms_PostsFilm {
    films: string[];
}

const ListFilms_PostsFilm = ({ films }: IListFilms_PostsFilm) => {
    return (
        <Row
            gutter={[16, 24]}
            style={{ margin: 10, marginTop: 50, marginBottom: 50 }}
        >
            {films.map((film: any, i: number) => (
                <Col className="gutter-row" span={6} key={i}>
                    <PostFilm film={film} />
                </Col>
            ))}
        </Row>
    );
};

export default ListFilms_PostsFilm;

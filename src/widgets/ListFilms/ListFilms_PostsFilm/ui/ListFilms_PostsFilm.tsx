import { PostFilm } from "entities/postFilm";
import { ACol } from "shared/ui/col";
import { ARow } from "shared/ui/row";

interface IListFilms_PostsFilm {
    films: string[];
}

const ListFilms_PostsFilm = ({ films }: IListFilms_PostsFilm) => {
    return (
        <ARow
            gutter={[16, 24]}
            style={{ margin: 10, marginTop: 50, marginBottom: 50 }}
        >
            {films.map((film: any, i: number) => (
                <ACol className="gutter-row" span={6} key={i}>
                    <PostFilm film={film} />
                </ACol>
            ))}
        </ARow>
    );
};

export default ListFilms_PostsFilm;

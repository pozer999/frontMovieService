import SkeletonItem from "entities/SkeletonItem/ui/SkeletonItem";
import { ARow } from "shared/ui/row";

const ListFilms_SkeletonItems = () => {
    return (
        <ARow
            gutter={[16, 24]}
            style={{ margin: 10, marginTop: 50, marginBottom: 50 }}
        >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
                <SkeletonItem key={index} />
            ))}
        </ARow>
    );
};

export default ListFilms_SkeletonItems;

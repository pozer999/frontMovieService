import { useSelector } from "react-redux";
import { memo, useEffect } from "react";
import { MainContainer } from "widgets/MainContainer";
import { getFilters } from "../model/selectors/MainPageSelectors";

const MainPage = memo(() => {
    const filters = useSelector(getFilters);

    useEffect(() => {
        console.log("filters: ", filters);
    }, [filters]);

    return (
        <div>
            <MainContainer />
        </div>
    );
});

export default MainPage;

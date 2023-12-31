import { useSelector } from "react-redux";

import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { filters } from "../../../shared/const/filters";
import { fetchFilms, filmsActions } from "../../../store/FilmsSlice";
import {
    getCurrentFilter,
    getValueInputSearch,
} from "../model/selectors/SortedAndInputSelectors";

import { SearchOutlined } from "@ant-design/icons";
import Compact from "antd/es/space/Compact";
import React, { useCallback } from "react";
import { useDebounce } from "shared/lib/hooks/useDebounce";
import cls from "./SortedAndInput.module.scss";
import { Button, Col, Input, Row, Select } from "antd";

export const SortedAndInput = () => {
    const dispatch = useAppDispatch();
    const currentFilter = useSelector(getCurrentFilter);
    const valueInputSearch = useSelector(getValueInputSearch);
    const fetchData = useCallback(() => {
        try {
            dispatch(fetchFilms());
        } catch (e) {
            console.error(e);
        } finally {
            console.log("сработал дебаунс через 3 сек");
        }
    }, [dispatch]);

    const fetchInputSearch = useDebounce(fetchData, 3000);

    const handleOnChangeSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(filmsActions.onChangeSearch(e.target.value));
            fetchInputSearch();
        },
        [dispatch, fetchInputSearch]
    );
    const handleChangeSelect = (value: string) => {
        dispatch(filmsActions.changeFilters(value));
        dispatch(fetchFilms());
    };

    return (
        <Row justify="space-between" align="middle" style={{ margin: 10 }}>
            <Col span={5} className={cls.inputSearch}>
                <Select
                    defaultValue={currentFilter}
                    className={cls.selectInput}
                    placement="bottomLeft"
                    options={filters}
                    onChange={handleChangeSelect}
                />
            </Col>
            <Col xl={10} xs={14}>
                <Compact
                    style={{ width: "100%" }}
                    className={cls.spaceInputSearch}
                >
                    <Input
                        placeholder="Enter the name of the movie"
                        className={cls.inputSearch}
                        onChange={(e) => handleOnChangeSearch(e)}
                    />
                    <Button type="primary" className={cls.spaceInputButton}>
                        <div className={cls.spanInputSearch_search}>Search</div>
                        <div className={cls.spanInputSearch_icon}>
                            <SearchOutlined />
                        </div>
                    </Button>
                </Compact>
            </Col>
        </Row>
    );
};

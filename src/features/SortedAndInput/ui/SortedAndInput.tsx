import { Button, Col, Input, Row, Select, Space, Tooltip } from "antd";

import { useDispatch, useSelector } from "react-redux";

import { fetchFilms, filmsActions } from "../../../store/FilmsSlice";
import { filters } from "../../../shared/const/filters";
import { getCurrentFilter, getValueInputSearch } from "../model/selectors/SortedAndInputSelectors";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

import cls from './SortedAndInput.module.scss';
import { SearchOutlined } from "@ant-design/icons";
import React, { useCallback } from "react";
import { fetchValueInputSearchActions } from "store/selectAndInputReducer";
import { useDebounce } from "shared/lib/hooks/useDebounce";


export const SortedAndInput = () => {
    const dispatch = useAppDispatch();
    const currentFilter = useSelector(getCurrentFilter);
    const valueInputSearch = useSelector(getValueInputSearch)
    const handleChange = (value: string) => {
        dispatch(filmsActions.changeFilters(value));
    };
    const fetchData = useCallback(() => {
        dispatch(fetchFilms()); // не запускает ее
        console.log("сработал дебаунс через 3 сек");
        
      }, [dispatch]);

    const fetchInputSearch = useDebounce(fetchData, 3000)

    const handleOnChangeSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(fetchValueInputSearchActions.onChangeSearch(e.target.value))
        console.log(e.target.value);
        fetchInputSearch();
    }, [dispatch,fetchInputSearch])
   
    return (
        <Row justify="space-between" align="middle" style={{ margin: 10 }} >
            <Col span={5} className={cls.inputSearch}>
                <Select
                    defaultValue={currentFilter}
                    className={cls.selectInput}
                    placement="bottomLeft"
                    options={filters}
                    onChange={handleChange}               
                />
            </Col>
            <Col xl={10} xs={14}>
                <Space.Compact style={{width: "100%"}} className={cls.spaceInputSearch}>
                    <Input placeholder="Enter the name of the movie" className={cls.inputSearch} onChange={(e) => handleOnChangeSearch(e)}/>
                    <Button type="primary" className={cls.spaceInputButton}>
                        <div className={cls.spanInputSearch_search}>Search</div>
                        <div className={cls.spanInputSearch_icon}><SearchOutlined /></div>
                    </Button>
                </Space.Compact>
            </Col>
        </Row>
    );
};
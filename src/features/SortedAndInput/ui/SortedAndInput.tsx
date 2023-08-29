import { Button, Col, Input, Row, Select, Space, Tooltip } from "antd";

import { useDispatch, useSelector } from "react-redux";

import { filmsActions } from "../../../store/FilmsSlice";
import { filters } from "../../../shared/const/filters";
import { getCurrentFilter } from "../model/selectors/SortedAndInputSelectors";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

import cls from "./SortedAndInput.module.scss";

export const SortedAndInput = () => {
    const dispatch = useAppDispatch();
    const currentFilter = useSelector(getCurrentFilter);
    const handleChange = (value: string) => {
        dispatch(filmsActions.changeFilters(value));
    };
    return (
        <Row justify="space-between" align="middle" style={{ margin: 10 }}>
            <Col span={14}>
                <Select
                    defaultValue={currentFilter}
                    className={cls.selectInput}
                    placement="bottomLeft"
                    options={filters}
                    onChange={handleChange}
                />
            </Col>
            <Col span={10}>
                <Space.Compact style={{ width: "100%" }}>
                    <Input placeholder="Enter the name of the movie" />
                    <Button type="primary">Search</Button>
                </Space.Compact>
            </Col>
        </Row>
    );
};

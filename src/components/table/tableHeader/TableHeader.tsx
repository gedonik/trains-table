import React from "react";
import "./tableHeader.css";
import {headings} from "./headings.js";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const TableHeader = () => {
    const sortParams = useTypedSelector(state => state.cars.sortParams);
    const dispatch = useDispatch();

    const sortColumns = (columnName: string) => {
        let direction = 'ascending';

        if (sortParams && sortParams.columnName === columnName && sortParams.direction === 'ascending') {
            direction = 'descending';
        }
        const newSortParams = {columnName, direction}
        dispatch({type: 'SORT_COLUMNS', payload: newSortParams});
    };

    const getClassNamesFor = (columnName: string) => {
        if (!sortParams) {
            return;
        }
        return sortParams.columnName === columnName ? sortParams.direction : undefined;
    };

    return (
        <thead>
        <tr>
            {headings.map(heading =>
                <th
                    onClick={() => sortColumns(heading.columnName)}
                    className={getClassNamesFor(heading.columnName)}
                    key={heading.columnName}
                >
                    {heading.columnTitle}
                </th>
            )}
        </tr>
        </thead>
    );
};

export default TableHeader;
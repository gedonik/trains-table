import React, {useContext} from "react";
import "./tableHeader.css";
import {headings} from "./headings.js";
import {TableContext} from "../../../pages/TablePage";

const TableHeader = () => {
    const {sortParams, setSortParams} = useContext(TableContext);

    const sortColumns = (columnName: string) => {
        let direction = 'ascending';

        if (sortParams && sortParams.columnName === columnName && sortParams.direction === 'ascending') {
            direction = 'descending';
        }
        const newSortParams = {columnName, direction};
        setSortParams(newSortParams);
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
import React from 'react';
import './tableHeader.css';
import {headings} from "./headings.js";

type PropsTableHeaderType = {
    sortColumns: Function,
    getClassNamesFor: Function
}

const TableHeader = ({sortColumns, getClassNamesFor}: PropsTableHeaderType) => {
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
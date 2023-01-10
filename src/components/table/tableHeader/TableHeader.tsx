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
                onClick={() => sortColumns(heading.name)}
                className={getClassNamesFor(heading.name)}
                key={heading.name}
            >
                {heading.title}
            </th>
            )}
        </tr>
        </thead>
    );
};

export default TableHeader;
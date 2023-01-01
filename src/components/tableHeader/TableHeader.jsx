import React from 'react';
import './tableHeader.css';

const TableHeader = ({ headings, sortColumns, getClassNamesFor }) => {
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
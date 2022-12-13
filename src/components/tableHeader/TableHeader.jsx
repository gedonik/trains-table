import React from 'react';
import './tableHeader.css';

export const headings = [
    {title: '№ п/п', key: 'ordNumber'},
    {title: 'Номер вагона', key: 'carNumber'},
    {title: 'Индекс поезда', key: 'trainIndex'},
    {title: 'Номер поезда', key: 'trainNumber'},
    {title: 'Статус', key: 'carStatus'},
    {title: 'Дата-время операции', key: 'lastOperDt'},
    {title: '№ накладной', key: 'invoiceNumber'},
    {title: 'ИД накладной', key: 'invoiceId'},
    {title: 'stateId', key: 'stateId'},
]

const TableHeader = ({sortColumns, getClassNamesFor}) => {
    return (
        <thead>
        <tr>
            {headings.map(heading =>
            <th
                onClick={() => sortColumns(heading.key)}
                className={getClassNamesFor(heading.key)}
                key={heading.key}
            >
                {heading.title}
            </th>
            )}
        </tr>
        </thead>
    );
};

export default TableHeader;
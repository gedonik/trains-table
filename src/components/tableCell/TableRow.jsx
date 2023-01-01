import React from 'react';
import './tableRow.css';
import {dateFormatting} from "../../services/date/dateFormatter.js";

const TableRow = ({ data, setRow }) => {
    return (
        <tr onClick={() => setRow(data.ordNumber)} className="row-list">
            <td className="row-item">{data.ordNumber}</td>
            <td className="row-item">{data.carNumber}</td>
            <td className="row-item">{data.trainIndex}</td>
            <td className="row-item">{data.trainNumber}</td>
            <td className="row-item">{data.carStatus}</td>
            <td className="row-item">{dateFormatting(data.lastOperDt)}</td>
            <td className="row-item">{data.invoiceNumber}</td>
            <td className="row-item">{data.invoiceId}</td>
            <td className="row-item">{data.stateId}</td>
        </tr>
    );
};

export default TableRow;

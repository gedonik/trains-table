import React from 'react';
import './tableCell.css';
import {dateFormat} from "../../services/date/dateFormatter.js";

const TableCell = ({cell}) => {
    return (
        <>
            <td>{cell.ordNumber}</td>
            <td>{cell.carNumber}</td>
            <td>{cell.trainIndex}</td>
            <td>{cell.trainNumber}</td>
            <td>{cell.carStatus}</td>
            <td>{dateFormat(cell.lastOperDt) ? dateFormat(cell.lastOperDt) : '-'}</td>
            <td>{cell.invoiceNumber}</td>
            <td>{cell.invoiceId}</td>
            <td>{cell.stateId}</td>
        </>
    );
};

export default TableCell;

import React from 'react';
import './tableCell.css';
import {dateFormat} from "../../services/date/dateFormatter.js";

const TableCell = ({cell}) => {
    // const dateFormatter = (date) => {
    //     let newDate = '';
    //     if (date) {
    //         //Разделяем строку на массив 3-х элементов -  даты, времени, пояса.
    //         const splitStr = date.replace('T', ' ').replace('.', ' ').split(' ');
    //         //Разделям дату на год, месяц, число. Время на часы, минуты, секунды.
    //         const dateSplit = splitStr[0].split('-');
    //         const timeSplit = splitStr[1].split(':');
    //         //Меняем местами число и год.
    //         [dateSplit[0], dateSplit[2]] = [dateSplit[2], dateSplit[0]];
    //         //Итоговая строка даты и времени
    //         const dateResult = `${dateSplit[0]}.${dateSplit[1]}.${dateSplit[2]}`;
    //         const timeResult = `${timeSplit[0]}:${timeSplit[1]}`;
    //
    //         newDate = `${dateResult} ${timeResult}`;
    //     }
    //     return newDate;
    // }
    //
    // const date = () => {
    //     dateFormatter(cell.lastOperDt);
    //
    //     if (dateFormatter(cell.lastOperDt)) {
    //         return dateFormatter(cell.lastOperDt)
    //     } else {
    //         return '-';
    //     }
    // }

    dateFormat(cell.lastOperDt);

    return (
        <>
            <td>{cell.ordNumber}</td>
            <td>{cell.carNumber}</td>
            <td>{cell.trainIndex}</td>
            <td>{cell.trainNumber}</td>
            <td>{cell.carStatus}</td>
            <td>{dateFormat()}</td>
            <td>{cell.invoiceNumber}</td>
            <td>{cell.invoiceId}</td>
            <td>{cell.stateId}</td>
        </>
    );
};

export default TableCell;

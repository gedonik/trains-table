import React from "react";
import "./tableRow.css";
import {dateFormatting} from "../../../services/date/dateFormatter.js";
import {useDispatch} from "react-redux";
import {Car} from "../../../types/cars";

const TableRow: React.FC = ({car}: {car: Car}) => {
    const dispatch = useDispatch();

    return (
        <tr onClick={() => dispatch({type: 'SET_ROW', payload: car.ordNumber})} className="row-list">
            <td className="row-item">{car.ordNumber}</td>
            <td className="row-item">{car.carNumber}</td>
            <td className="row-item">{car.trainIndex}</td>
            <td className="row-item">{car.trainNumber}</td>
            <td className="row-item">{car.carStatus}</td>
            <td className="row-item">{dateFormatting(car.lastOperDt)}</td>
            <td className="row-item">{car.invoiceNumber}</td>
            <td className="row-item">{car.invoiceId}</td>
            <td className="row-item">{car.stateId}</td>
        </tr>
    );
};

export default TableRow;

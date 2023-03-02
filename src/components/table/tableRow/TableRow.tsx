import React, {useContext} from "react";
import "./tableRow.css";
import {dateFormatting} from "../../../services/dateFormatter.js";
import {Car} from "../../../types/cars";
import {TableContext} from "../../../pages/TablePage";

type PropsTableRow = {
    car: Car
}

const TableRow: React.FC<PropsTableRow> = (props: PropsTableRow) => {
    const {car} = props;
    const {findCarHandler} = useContext(TableContext);

    return (
        <tr onClick={() => findCarHandler(car.ordNumber)} className="row-list">
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
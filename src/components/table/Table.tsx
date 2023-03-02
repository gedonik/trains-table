import React from "react";
import TableHeader from "./tableHeader/TableHeader.js";
import TableRow from "./tableRow/TableRow.js";
import "./table.css";
import {Car} from "../../types/cars";

type PropsTable = {
    filteredCars: Car[]
}

const Table: React.FC<PropsTable> = (props: PropsTable) => {
    const {filteredCars} = props;

    return (
        filteredCars.length
            ?
            <table className="table">
                <TableHeader />
                <tbody>
                {filteredCars.map((car, index: number) =>
                    <TableRow car={car} key={index}/>
                )}
                </tbody>
            </table>
            :
            <h2 className="no-data-title">Данные не найдены</h2>
    );
};

export default Table;
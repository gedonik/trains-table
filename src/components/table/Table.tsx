import React from 'react';
import TableHeader from "./tableHeader/TableHeader.js";
import TableRow from "./tableRow/TableRow.js";
import './table.css';
import {Car} from "../../globalTypes";

type PropsTableType = {
    data: [] | Array<Car>,
    sortColumns: Function,
    getClassNamesFor: Function,
    setRow: Function
}

const Table = ({data, sortColumns, getClassNamesFor, setRow}: PropsTableType) => {
    return (
        data
            ?
            <table className="table">
                <TableHeader sortColumns={sortColumns} getClassNamesFor={getClassNamesFor} />
                <tbody>
                {data.map((row, index) =>
                    <TableRow setRow={setRow} data={row} key={index}/>
                )}
                </tbody>
            </table>
            :
            <h2>No data</h2>
    );
};

export default Table;
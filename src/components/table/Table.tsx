import React from 'react';
import TableHeader from "./tableHeader/TableHeader.js";
import TableRow from "./tableRow/TableRow.js";
import './table.css';
import {Car} from "../../globalTypes";
import {useSorting} from "../ui/filterAndSearch/sort/useSorting";
import {searchAndSort} from "../ui/filterAndSearch/searchAndSort";

type PropsTableType = {
    data: [] | Array<Car>
    setRow: Function,
}

const Table = ({data, setRow}: PropsTableType) => {
    const [sortedCells, sortColumns, getClassNamesFor] = useSorting(data);

    return (
        sortedCells
            ?
            <table className="table">
                <TableHeader sortColumns={sortColumns} getClassNamesFor={getClassNamesFor} />
                <tbody>
                {sortedCells.map(row =>
                    <TableRow setRow={setRow} data={row} key={row.ordNumber}/>
                )}
                </tbody>
            </table>
            :
            <h2>No data</h2>
    );
};

export default Table;
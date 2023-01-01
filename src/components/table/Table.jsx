import React from 'react';
import TableHeader from "../tableHeader/TableHeader.jsx";
import TableRow from "../tableCell/TableRow.jsx";
import './table.css';

const Table = ({ data, headings, sortColumns, getClassNamesFor, setRow }) => {
    return (
        data
            ?
                <table className="table">
                    <TableHeader headings={headings} sortColumns={sortColumns} getClassNamesFor={getClassNamesFor}/>
                    <tbody>
                    {data.map(row =>
                        <TableRow setRow={setRow} data={row} key={row.ordNumber}/>
                    )}
                    </tbody>
                </table>
            :
            <h2>No data</h2>
    );
};

export default Table;
import React from "react";
import TableHeader from "./tableHeader/TableHeader.js";
import TableRow from "./tableRow/TableRow.js";
import "./table.css";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useSorting} from "../hooks/useSorting";
import {useSearching} from "../hooks/useSearching";

const Table: React.FC = () => {
    const {sortParams, searchValue, paginatedArr} = useTypedSelector(state => state.cars);
    const [searchFilter] = useSearching(searchValue);
    const [sortFilter] = useSorting(sortParams);

    const filteredCars = sortFilter(searchFilter(paginatedArr));

    return (
        filteredCars.length
            ?
            <table className="table">
                <TableHeader/>
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
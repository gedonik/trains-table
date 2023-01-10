import {useState, useMemo} from "react";
import {DataType} from "../../../../globalTypes";

export const useSorting = (data: DataType) => {
    const [sortTitle, setSortTitle] = useState(null);

    const sortedCells = useMemo(() => {
        let sortableCells = [...data];

        if (sortTitle !== null) {
            sortableCells.sort((a, b) => {
                if (a[sortTitle.name] < b[sortTitle.name]) {
                    return sortTitle.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortTitle.name] > b[sortTitle.name]) {
                    return sortTitle.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableCells;
    }, [data, sortTitle])

    const sortColumns = (name: string) => {
        let direction = 'ascending';

        if (sortTitle && sortTitle.name === name && sortTitle.direction === 'ascending') {
            direction = 'descending';
        }
        setSortTitle({name, direction});
    }

    const getClassNamesFor = (name: string) => {
        if (!sortTitle) {
            return;
        }
        return sortTitle.name === name ? sortTitle.direction : undefined;
    };

    return [sortedCells, sortColumns, getClassNamesFor]
}





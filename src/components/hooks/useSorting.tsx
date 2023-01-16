import {useState, useMemo} from "react";
import {Car} from "../../globalTypes";

export const useSorting = (data: Car[]) => {
    const [sortParams, setSortParams] = useState(null);

    const sortedData = useMemo(() => {
        let sortableCells = [...data];

        if (sortParams !== null) {
            sortableCells.sort((a, b) => {
                if (a[sortParams.name] < b[sortParams.name]) {
                    return sortParams.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortParams.name] > b[sortParams.name]) {
                    return sortParams.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableCells;
    }, [data, sortParams])

    const sortColumns = (name: string) => {
        let direction = 'ascending';

        if (sortParams && sortParams.name === name && sortParams.direction === 'ascending') {
            direction = 'descending';
        }
        setSortParams({name, direction});
    }

    const getClassNamesFor = (name: string) => {
        if (!sortParams) {
            return;
        }
        return sortParams.name === name ? sortParams.direction : undefined;
    };

    return [sortedData, sortColumns, getClassNamesFor]
}





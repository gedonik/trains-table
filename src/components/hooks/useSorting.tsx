import {Car, SortParams} from "../../types/cars";

export const useSorting = (sortStateParams: SortParams | null) => {
    const sortFilter = (arr: [] | Car[]) => {
        let sortedArr = [...arr];

        if (sortStateParams !== null) {
            sortedArr.sort((a, b) => {
                if (a[sortStateParams.columnName as keyof Car] < b[sortStateParams.columnName as keyof Car]) {
                    return sortStateParams.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortStateParams.columnName as keyof Car] > b[sortStateParams.columnName as keyof Car]) {
                    return sortStateParams.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortedArr;
    }

    return [sortFilter];
}
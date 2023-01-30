type PropsSortStateParamsType = {
    columnName: string,
    direction: string
}

export const useSorting = (sortStateParams: PropsSortStateParamsType) => {
    const sortFilter = (arr: []) => {
        let sortedArr = [...arr];

        if (sortStateParams !== null) {
            sortedArr.sort((a, b) => {
                if (a[sortStateParams.columnName] < b[sortStateParams.columnName]) {
                    return sortStateParams.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortStateParams.columnName] > b[sortStateParams.columnName]) {
                    return sortStateParams.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortedArr;
    }

    return [sortFilter]
}
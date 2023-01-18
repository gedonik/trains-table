
export const useSorting = (sortStateParams) => {
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

// return useMemo(() => {
//     if (sortStateParams !== null) {
//         sortedArr.sort((a, b) => {
//             if (a[sortStateParams.columnName] < b[sortStateParams.columnName]) {
//                 return sortStateParams.direction === 'ascending' ? -1 : 1;
//             }
//             if (a[sortStateParams.columnName] > b[sortStateParams.columnName]) {
//                 return sortStateParams.direction === 'ascending' ? 1 : -1;
//             }
//             return 0;
//         });
//     }
//     return sortedArr;
// }, [arr, sortStateParams])

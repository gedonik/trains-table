import {useMemo, useState} from "react";

export const useSearching = (initialStateSearch: string) => {
    const [searchValue, setSearchValue] = useState(initialStateSearch);

    const searchFilter = (arr: []) => {
        return arr.filter(item => item.carNumber.toLowerCase().includes(searchValue.toLowerCase()))
    }

    return [searchFilter, searchValue, setSearchValue]
}
// Как вместо carNumber подставить другие значения ?

// const searchFilter = (arr: []) => {
//     return useMemo(() => {
//         return arr.filter(item => item.carNumber.toLowerCase().includes(searchValue.toLowerCase()))
//     }, [searchValue]);
// }
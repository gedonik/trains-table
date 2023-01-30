import {useState} from "react";
import {Car} from "../../globalTypes";

export const useSearching = (initialStateSearch: string): [Function, string, Function] => {
    const [searchValue, setSearchValue] = useState(initialStateSearch);

    const searchFilter = (arr: Car[]) => {
        return arr.filter(item => item.carNumber.toLowerCase().includes(searchValue.toLowerCase()))
    }

    return [searchFilter, searchValue, setSearchValue]
}
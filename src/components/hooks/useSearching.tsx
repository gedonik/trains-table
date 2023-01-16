import {useMemo, useState} from "react";
import {Car} from "../../globalTypes";

export const useSearching = (data: Car[]) => {
    const [searchValue, setSearchValue] = useState('');

    const searchedData = useMemo(() => {
        return data.filter(item => item.carNumber.toLowerCase().includes(searchValue.toLowerCase()))
    }, [searchValue]);

    return [searchedData, searchValue, setSearchValue]
}
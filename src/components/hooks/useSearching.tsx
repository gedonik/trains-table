import {Car} from "../../types/cars";

export const useSearching = (searchStateParams: string) => {
    const searchFilter = (arr: Car[]): Car[] => {
        return arr.filter(item => item.carNumber.toLowerCase().includes(searchStateParams.toLowerCase()));
    };

    return [searchFilter];
}
import {Car} from "../types/cars";

export const searchFilter = (arr: Car[], searchStateParams: string) => {
    return arr.filter(item => item.carNumber.toLowerCase().includes(searchStateParams.toLowerCase()));
};
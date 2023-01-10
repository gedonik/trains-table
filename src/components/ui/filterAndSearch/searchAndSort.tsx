import {useSorting} from "./sort/useSorting";
import mainSearch from "./search/MainSearch";

export const searchAndSort = (data) => {

    const [sortedCells] = useSorting(data);

    mainSearch(sortedCells);



    return sortedCells;
}



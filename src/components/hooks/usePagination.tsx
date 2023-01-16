import {useState} from "react";

type PropsUsePaginationType = {
    contentPerPage: number,
    count: number
}

export const usePagination = ({ contentPerPage, count }: PropsUsePaginationType) => {
    const [page, setPage] = useState(1);
    const pageCount = Math.ceil(count / contentPerPage);
    const lastContentIndex = page * contentPerPage;//10 или 5 на 1 странице и 20 или 10 на второй
    const firstContentIndex = lastContentIndex - contentPerPage;//0 на 1 странице или
    //contentPerPage - selectedValue, count - data.length, slice(firstContentIndex, lastContentIndex)

    const changePage = (direction: boolean) => {
        setPage((state) => {
            if (direction) {
                if (state === pageCount) {
                    return state;
                }
                return state + 1;
            } else {
                if (state === 1) {
                    return state;
                }
                return state - 1;
            }
        });
    };
    const setPageSAFE = (num: number) => {
        if (num > pageCount) {
            setPage(pageCount);
        } else if (num < 1) {
            setPage(1);
        } else {
            setPage(num);
        }
    };
    return {
        totalPages: pageCount,
        nextPage: () => changePage(true),
        prevPage: () => changePage(false),
        setPage: setPageSAFE,
        firstContentIndex,
        lastContentIndex,
        page,
    };
}
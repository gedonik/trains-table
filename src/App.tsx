import React from "react";
import Table from "./components/table/Table.jsx";
import {useEffect, useState} from "react";
import {useFetching} from "./components/hooks/useFetching.jsx";
import api from "./components/fetch/api/api.js";
import ErrorFetch from "./components/fetch/errorFetch/ErrorFetch.jsx";
import MainLoader from "./components/ui/loader/MainLoader.jsx";
import EditCellsModal from "./components/ui/modal/EditCellsModal.jsx";
import EditRow from "./components/table/editRow/EditRow.jsx";
import MainSearch from "./components/ui/search/MainSearch.jsx";
import {useSorting} from "./components/hooks/useSorting.jsx";
import {useSearching} from "./components/hooks/useSearching.jsx";
import MainPagination from "./components/ui/pagination/MainPagination.jsx";
import {usePagination} from "./components/hooks/usePagination.jsx";
import {Car, SortParamsType} from "./globalTypes";

function App() {
    const [data, setData] = useState<Car[] | []>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [modal, setModal] = useState<boolean>(false);
    const [currentRow, setCurrentRow] = useState<Car | null | undefined>(null);
    const [sortParams, setSortParams] = useState<SortParamsType | null | undefined>(null);
    const [selectedPaginationNum, setSelectedPaginationNum] = useState<number>(10);
    const [paginatedArr, setPaginatedArr] = useState<Car[] | []>([]);
    const [firstPaginatedItem, setPaginatedItemFirst] = useState<Car | null>(null);
    const [lastPaginatedItem, setPaginatedItemLast] = useState<Car | null>(null);
//fetch //---------------------------------------------------------------------------------------------------------
    const [fetching, dataError] = useFetching(async () => {
        const response = await api.fetchData();
        setData([...data, ...response.data]);
    }, setIsLoading)

    useEffect(() => {
        fetching();
    }, [])
//pagination //----------------------------------------------------------------------------------------------------
    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        totalPages,
    } = usePagination({
        contentPerPage: selectedPaginationNum,
        count: data.length,
    });

    useEffect(() => {
        if (!isLoading) {
            setPaginatedArr([...data.slice(firstContentIndex, lastContentIndex)]);
        }
    }, [data, selectedPaginationNum, page])

    useEffect(() => {
        setPaginatedItemFirst(paginatedArr[0]);
        setPaginatedItemLast(paginatedArr[paginatedArr.length - 1]);
    }, [paginatedArr])
//search //------------------------------------------------------------------------------------------------------
    const [searchFilter, searchValue, setSearchValue] = useSearching('');
//sort //--------------------------------------------------------------------------------------------------------
    const sortColumns = (columnName: string) => {
        let direction = 'ascending';

        if (sortParams && sortParams.columnName === columnName && sortParams.direction === 'ascending') {
            direction = 'descending';
        }
        setSortParams({columnName, direction});
    };

    const getClassNamesFor = (columnName: string) => {
        if (!sortParams) {
            return;
        }
        return sortParams.columnName === columnName ? sortParams.direction : undefined;
    };

    const [sortFilter] = useSorting(sortParams)
//open modal //-------------------------------------------------------------------------------------------------
    const setRow = (id: number) => {
        const currentRow: Car | undefined = data.find(item => item.ordNumber === id);
        setModal(true);
        setCurrentRow(currentRow);
    }
//change modal //-----------------------------------------------------------------------------------------------
    const changeRow = (id: number, trainNumber: string, time: string, invoiceNumber: string, invoiceId: string) => {
        const changedData = data.map(item =>
            item.ordNumber === id
                ? {
                    ...item,
                    trainNumber: trainNumber,
                    lastOperDt: time,
                    invoiceNumber: invoiceNumber,
                    invoiceId: invoiceId
                }
                : item
        )
        setData(changedData);
    }

    return (
        <div className="App">
            <h1 className="visually-hidden">Таблица учета вагонов</h1>
            <div className="container">
                {dataError
                    ? <ErrorFetch error={dataError}/>
                    : isLoading
                        ? <MainLoader/>
                        : <div className="app-wrapper">
                            <MainSearch
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                            />
                            <Table
                                setRow={setRow}
                                data={sortFilter(searchFilter(paginatedArr))}
                                sortColumns={sortColumns}
                                getClassNamesFor={getClassNamesFor}
                            />
                            <MainPagination
                                selectedPaginationNum={selectedPaginationNum}
                                setSelectedPaginationNum={setSelectedPaginationNum}
                                dataLength={data.length}
                                prevPage={prevPage}
                                nextPage={nextPage}
                                page={page}
                                totalPages={totalPages}
                                firstPaginatedItem={firstPaginatedItem}
                                lastPaginatedItem={lastPaginatedItem}
                            />
                        </div>
                }

                {modal
                    ?
                    <EditCellsModal visible={modal} setVisible={setModal}>
                        <EditRow currentRow={currentRow} setVisible={setModal}
                                 changeRow={changeRow}/>
                    </EditCellsModal>
                    : null
                }
            </div>
        </div>
    )
}

export default App;

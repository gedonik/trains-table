import React from "react";
import Table from "./components/table/Table.tsx";
import {useEffect, useState} from "react";
import {useFetching} from "./components/hooks/useFetching.tsx";
import api from "./components/fetch/api/api.ts";
import ErrorFetch from "./components/fetch/errorFetch/ErrorFetch.tsx";
import MainLoader from "./components/ui/loader/MainLoader.tsx";
import EditCellsModal from "./components/ui/modal/EditCellsModal.tsx";
import EditRow from "./components/table/editRow/EditRow.jsx";
import MainSearch from "./components/ui/search/MainSearch.tsx";
import {useSorting} from "./components/hooks/useSorting.tsx";
import {useSearching} from "./components/hooks/useSearching.tsx";
import {localData} from "./data.js";
import MainPagination from "./components/ui/pagination/MainPagination.tsx";
import {usePagination} from "./components/hooks/usePagination.tsx";

function App() {
    const [data, setData] = useState(localData);
    const [modal, setModal] = useState(false);
    const [currentRow, setCurrentRow] = useState(null);
    const [selectedValue, setSelectedValue] = useState(10);
    const [paginatedArr, setPaginatedArr] = useState([]);
    const [first, setFirst] = useState(null);
    const [last, setLast] = useState(null);

    const [fetchData, isDataLoading, dataError] = useFetching(async () => {
        // const response = await api.fetchData();
        // setData([...data, ...response.data]);
    })

    useEffect(() => {
        // fetchData();
    }, [])

    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
    } = usePagination({
        contentPerPage: selectedValue,
        count: data.length,
    });

    useEffect(() => {
        setPaginatedArr([...data.slice(firstContentIndex, lastContentIndex)]);
    }, [selectedValue, page])

    useEffect(() => {
        setFirst(paginatedArr[0]);
        setLast(paginatedArr[paginatedArr.length - 1]);
    }, [paginatedArr])


    const [searchedData, searchValue, setSearchValue] = useSearching(paginatedArr);
    const [sortedData, sortColumns, getClassNamesFor] = useSorting(searchedData);

    const setRow = (id) => {
        const currentRow = data.find(item => item.ordNumber === id);
        setModal(true);
        setCurrentRow(currentRow);
    }

    const changeRow = (id, trainNumber, date, invoiceNumber, invoiceId) => {
        const newData = data.map(item =>
            item.ordNumber === id
                ? {
                    ...item,
                    trainNumber: trainNumber,
                    lastOperDt: date,
                    invoiceNumber: invoiceNumber,
                    invoiceId: invoiceId
                }
                : item
        )
        setData(newData);
    }

    return (
        <div className="App">
            <h1 className="visually-hidden">Таблица учета вагонов</h1>
            <div className="container">
                {dataError
                    ? <ErrorFetch error={dataError}/>
                    : isDataLoading
                        ? <MainLoader/>
                        : <div className="app-wrapper">
                            <MainSearch
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                            />
                            <Table
                                setRow={setRow}
                                data={paginatedArr}
                                sortColumns={sortColumns}
                                getClassNamesFor={getClassNamesFor}
                            />
                            <MainPagination
                                selectedValue={selectedValue}
                                setSelectedValue={setSelectedValue}
                                dataLength={data.length}
                                prevPage={prevPage}
                                nextPage={nextPage}
                                page={page}
                                totalPages={totalPages}
                                first={first}
                                last={last}
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

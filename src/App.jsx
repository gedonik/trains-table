import React, {useMemo} from "react";
import Table from "./components/table/Table.jsx";
import {useEffect, useState} from "react";
import {useFetching} from "./components/hooks/useFetching.js";
import api from "./services/api/api.js";
import {getPageCount} from "./services/pages.js";
import Pagination from "./components/ui/pagination/Pagination.jsx";
import ErrorFetch from "./components/errorFetch/ErrorFetch.jsx";
import MainLoader from "./components/ui/loader/MainLoader.jsx";
import EditCellsModal from "./components/ui/modal/EditCellsModal.jsx";
import EditRow from "./components/editCell/EditRow.jsx";

function App() {
    const [data, setData] = useState([]);
    const [sortTitle, setSortTitle] = useState(null);
    const [modal, setModal] = useState(false);
    const [currentRow, setCurrentRow] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const headings = [
        {title: '№ п/п', name: 'ordNumber'},
        {title: 'Номер вагона', name: 'carNumber'},
        {title: 'Индекс поезда', name: 'trainIndex'},
        {title: 'Номер поезда', name: 'trainNumber'},
        {title: 'Статус', name: 'carStatus'},
        {title: 'Дата-время операции', name: 'lastOperDt'},
        {title: '№ накладной', name: 'invoiceNumber'},
        {title: 'ИД накладной', name: 'invoiceId'},
        {title: 'stateId', name: 'stateId'},
    ]

    const [fetchData, isDataLoading, dataError] = useFetching(async () => {
        const response = await api.fetchData(limit, page);
        setData([...data, ...response.data]);
        const totalCount = 12;
        setTotalPages(getPageCount(totalCount, limit));
    })

    useEffect(() => {
        fetchData();
    }, [page])

    const sortedCells = useMemo(() => {
        let sortableCells = [...data];

        if (sortTitle !== null) {
            sortableCells.sort((a, b) => {
                if (a[sortTitle.key] < b[sortTitle.key]) {
                    return sortTitle.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortTitle.key] > b[sortTitle.key]) {
                    return sortTitle.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableCells;
    }, [data, sortTitle])

    const sortColumns = (key) => {
        let direction = 'ascending';

        if (sortTitle && sortTitle.key === key && sortTitle.direction === 'ascending') {
            direction = 'descending';
        }
        setSortTitle({key, direction});
    }

    const getClassNamesFor = (name) => {
        if (!sortTitle) {
            return;
        }
        return sortTitle.key === name ? sortTitle.direction : undefined;
    };

    const setRow = (id) => {
        const currentRow = data.filter(item => item.ordNumber === id);
        setModal(true);
        setCurrentRow(...currentRow);
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

    const changePage = (page) => {
        setPage(page)
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
                            <Table
                                headings={headings}
                                sortColumns={sortColumns}
                                getClassNamesFor={getClassNamesFor}
                                setRow={setRow}
                                data={sortedCells}
                            />

                            <Pagination
                                page={page}
                                changePage={changePage}
                                totalPages={totalPages}
                            />
                        </div>
                }

                {modal
                    ?
                    <EditCellsModal visible={modal} setVisible={setModal}>
                        <EditRow headings={headings} currentRow={currentRow} setVisible={setModal}
                                 changeRow={changeRow}/>
                    </EditCellsModal>
                    : null
                }
            </div>
        </div>
    )
}

export default App;

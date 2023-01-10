import React, {useMemo} from "react";
import Table from "./components/table/Table.tsx";
import {useEffect, useState} from "react";
import {useFetching} from "./components/fetch/hooks/useFetching.ts";
import api from "./services/api/api.ts";
import ErrorFetch from "./components/fetch/errorFetch/ErrorFetch.tsx";
import MainLoader from "./components/ui/loader/MainLoader.tsx";
import EditCellsModal from "./components/ui/modal/EditCellsModal.tsx";
import EditRow from "./components/table/editRow/EditRow.jsx";
import MainSearch from "./components/ui/filterAndSearch/search/MainSearch.tsx";
import {searchAndSort} from "./components/ui/filterAndSearch/searchAndSort.tsx";

function App() {
    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false);
    const [currentRow, setCurrentRow] = useState(null);

    const [fetchData, isDataLoading, dataError] = useFetching(async () => {
        const response = await api.fetchData();
        setData([...data, ...response.data]);
    })

    useEffect(() => {
        fetchData();
    }, [])

    searchAndSort(data);

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
                            <MainSearch data={data} />
                            <Table
                                setRow={setRow}
                                data={data}
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

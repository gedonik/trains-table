import React from "react";
import Table from "./components/table/Table.jsx";
import ErrorFetch from "./components/fetch/errorFetch/ErrorFetch.jsx";
import MainLoader from "./components/ui/loader/MainLoader.jsx";
import EditCellsModal from "./components/ui/modal/EditCellsModal.jsx";
import EditRow from "./components/table/editRow/EditRow.jsx";
import MainSearch from "./components/ui/search/MainSearch.jsx";
import MainPagination from "./components/ui/pagination/MainPagination";
import {useTypedSelector} from "./components/hooks/useTypedSelector";

function App() {
    const {loading, error, editRowModal} = useTypedSelector(state => state.cars);

    return (
        <div className="App">
            <h1 className="visually-hidden">Таблица учета вагонов</h1>
            <div className="container">
                {error
                    ?
                    <ErrorFetch error={error}/>
                    :
                    loading
                        ?
                        <MainLoader/>
                        :
                        <div className="app-wrapper">
                            <MainSearch/>
                            <Table/>
                            <MainPagination/>
                        </div>
                }
            </div>
            {editRowModal
                ?
                <EditCellsModal visible={editRowModal}>
                    <EditRow/>
                </EditCellsModal>
                :
                null
            }
        </div>
    )
}

export default App;

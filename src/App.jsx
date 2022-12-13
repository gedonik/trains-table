import React, {useMemo} from "react";
import Table from "./components/table/Table.jsx";
import {useEffect, useState} from "react";
import api from "./services/api/api.js";

function App() {
    const [data, setData] = useState([]);
    const [sortTitle, setSortTitle] = useState(null);
    const [modal, setModal] = useState(false);

    async function fetchData() {
        const response = await api.fetchData();
        setData(response.data);
    }

    useEffect(() => {
        fetchData()
    }, [])

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

    return (
        <div className="App">
            <h1 className="visually-hidden">Таблица учета вагонов</h1>
            <div className="container">
                <Table
                    sortColumns={sortColumns}
                    getClassNamesFor={getClassNamesFor}
                    data={sortedCells}
                    modal={modal}
                    setModal={setModal}
                />
            </div>
        </div>
    )
}

export default App;

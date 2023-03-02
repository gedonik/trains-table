import React, {createContext, useEffect, useState} from 'react';
import ErrorFetch from "../components/errorFetch/ErrorFetch";
import MainLoader from "../components/ui/loader/MainLoader";
import MainSearch from "../components/ui/search/MainSearch";
import Table from "../components/table/Table";
import MainPagination from "../components/ui/pagination/MainPagination";
import EditCellsModal from "../components/ui/modal/EditCellsModal";
import EditRow from "../components/table/editRow/EditRow";
import {useTypedSelector} from "../components/hooks/useTypedSelector";
import {useActions} from "../components/hooks/useActions";
import {useSorting} from "../components/hooks/useSorting";
import {searchFilter} from "../services/searchFilter";
import {usePagination} from "../components/hooks/usePagination";
import {Car} from "../types/cars";

interface TableContextType {
    sortParams: {columnName: string, direction: string} | null;
    setSortParams: Function,
    findCarHandler: (id: number) => void
}

const tableContextDefaultValue: TableContextType = {
    sortParams: null,
    setSortParams: () => {},
    findCarHandler: () => {}
}

export const TableContext = createContext<TableContextType>(tableContextDefaultValue);

const TablePage: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [sortParams, setSortParams] = useState<null | {columnName: string, direction: string}>(null);
    const [findCar, setFindCar] = useState<number>(0);
    const [modal, setModal] = useState<boolean>(false);
    const [selectedPaginationNum, setSelectedPaginationNum] = useState<number>(10);
    const [paginatedArr, setPaginatedArr] = useState<[] | Car[]>([]);
    const [firstPaginatedItem, setPaginatedItemFirst] = useState<null | Car>(null);
    const [lastPaginatedItem, setPaginatedItemLast] = useState<null | Car>(null);

//fetch //---------------------------------------------------------------------------------------------------------
    const {cars, loading, error} = useTypedSelector(state => state.cars);
    const {fetchCars} = useActions();

    useEffect(() => {
        fetchCars();
    }, []);

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
        count: cars.length,
    });

    useEffect(() => {
        if (!loading) {
            setPaginatedArr([...cars.slice(firstContentIndex, lastContentIndex)])
        }
    }, [cars, selectedPaginationNum, page]);

    useEffect(() => {
        setPaginatedItemFirst(paginatedArr[0]);
        setPaginatedItemLast(paginatedArr[paginatedArr.length - 1]);
    }, [paginatedArr])

//pipeline filter //-----------------------------------------------------------------------------------------------
    const [sortFilter] = useSorting(sortParams);
    const filteredCars = sortFilter(searchFilter(paginatedArr, searchValue));

//change modal //-----------------------------------------------------------------------------------------------
    const findCarHandler = (id: number) => {
        setFindCar(id);
        setModal(true);
    }

    return (
        <div>
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
                            <MainSearch
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                            />

                            <TableContext.Provider value={{sortParams, setSortParams, findCarHandler}}>
                                <Table filteredCars={filteredCars} />
                            </TableContext.Provider>

                            <MainPagination
                                selectedPaginationNum={selectedPaginationNum}
                                setSelectedPaginationNum={setSelectedPaginationNum}
                                page={page}
                                totalPages={totalPages}
                                nextPage={nextPage}
                                prevPage={prevPage}
                                firstPaginatedItem={firstPaginatedItem}
                                lastPaginatedItem={lastPaginatedItem}
                            />
                        </div>
                }
            </div>
            {modal
                ?
                <EditCellsModal visible={modal} setVisible={setModal}>
                    <EditRow cars={cars} findCar={findCar} setVisible={setModal}/>
                </EditCellsModal>
                :
                null
            }
        </div>
    );
};

export default TablePage;
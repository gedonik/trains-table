import React, {useEffect, useState} from 'react';
import './mainPagination.css';
import MainButton from "../button/MainButton";
import MainSelect from "../select/MainSelect";
import {useDispatch} from "react-redux";
import {usePagination} from "../../hooks/usePagination";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const MainPagination = () => {
    const [selectedPaginationNum, setSelectedPaginationNum] = useState(10);
    const {cars, paginatedArr} = useTypedSelector(state => state.cars);
    const dispatch = useDispatch();

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
        dispatch({type: 'PAGINATION', payload: {firstContentIndex, lastContentIndex}})
    }, [page, selectedPaginationNum])

    return (
        <div className="pagination">
            <span className="pagination__descr">Строк на странице:</span>
            <div className="select-wrapper">
                <MainSelect
                    options={[
                        {value: 5, name: '5'},
                        {value: 10, name: '10'}
                    ]}
                    value={selectedPaginationNum}
                    onChange={setSelectedPaginationNum}
                />
            </div>
            <span className="pagination__page">
                {`${paginatedArr.length ? paginatedArr[0].ordNumber : '-'}-${paginatedArr.length ? paginatedArr[paginatedArr.length - 1].ordNumber : '-'} из ${cars.length}`}
            </span>
            <MainButton
                onClick={prevPage}
                className="btn pagination__arrow-left"
                type="button"
                disabled={page === 1}
            >
                <i className="bi bi-arrow-left"></i>
            </MainButton>
            <MainButton
                onClick={nextPage}
                className="btn pagination__arrow-right"
                type="button"
                disabled={page === totalPages}
            >
                <i className="bi bi-arrow-right"></i>
            </MainButton>
        </div>
    );
};

export default MainPagination;
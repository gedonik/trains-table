import React, {useState} from 'react';
import './mainPagination.css';
import MainButton from "../button/MainButton";
import MainSelect from "../select/MainSelect";
import {Car} from "../../../globalTypes";

type firstPaginatedItemType = {
    ordNumber: number
}

type lastPaginatedItem = {
    ordNumber: number
}

type PropsMainPaginationType = {
    selectedPaginationNum: number,
    setSelectedPaginationNum: Function,
    dataLength: number,
    page: number,
    prevPage: Function,
    nextPage: Function,
    totalPages: number,
    firstPaginatedItem: firstPaginatedItemType,
    lastPaginatedItem: lastPaginatedItem
}

const MainPagination = ({selectedPaginationNum, setSelectedPaginationNum, dataLength, page, prevPage, nextPage, totalPages, firstPaginatedItem, lastPaginatedItem}: PropsMainPaginationType) => {
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
                {`${firstPaginatedItem ? firstPaginatedItem.ordNumber : '-'}-${lastPaginatedItem ? lastPaginatedItem.ordNumber : '-'} из ${dataLength}`}
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
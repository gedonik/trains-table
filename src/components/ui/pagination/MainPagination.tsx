import React, {useState} from 'react';
import './mainPagination.css';
import MainButton from "../button/MainButton";
import MainSelect from "../select/MainSelect";
import {Car} from "../../../globalTypes";

type PropsMainPaginationType = {
    selectedValue: number,
    setSelectedValue: Function,
    dataLength: number,
    page: number,
    prevPage: Function,
    nextPage: Function,
    totalPages: number,
    first: Car<Object>,
    last: number
}

const MainPagination = ({selectedValue, setSelectedValue, dataLength, page, prevPage, nextPage, totalPages, first, last}: PropsMainPaginationType) => {
    return (
        <div className="pagination">
            <span className="pagination__descr">Строк на странице:</span>
            <div className="select-wrapper">
                <MainSelect
                    options={[
                        {value: 5, name: '5'},
                        {value: 10, name: '10'}
                    ]}
                    value={selectedValue}
                    onChange={setSelectedValue}
                />
            </div>
            <span className="pagination__page">
                {`${first ? first.ordNumber : '-'}-${last ? last.ordNumber : '-'} из ${dataLength}`}
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